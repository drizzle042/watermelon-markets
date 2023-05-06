import { useState, useEffect } from "react";

const useFetchOnMount = (endpoint) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const tokens = localStorage.getItem("adminAccessToken") || "none"

  function fetchData(){
    setIsLoading(true)
    fetch(endpoint, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + tokens,
        }
    })
        .then((response) => {
            if (response.ok){
                let promise = response.json()
                promise
                    .then((resObj) => {
                        setIsLoading(false)
                        setData(resObj)
                        setError(null)
                    })
                        .catch(() => {
                            setIsLoading(false)
                            setData(null)
                            setError({
                                message: "Something went wrong. Dont worry we are on it."
                            })
                        })
            } else {
                let promise = response.json()
                promise
                    .then((resObj) => {
                        setIsLoading(false)
                        setData(null)
                        setError(resObj)
                    })
                        .catch(() => {
                            setIsLoading(false)
                            setData(null)
                            setError({
                                message: "Something went wrong. Dont worry we are on it."
                            })
                        })
            }
        })
            .catch(() => {
                setIsLoading(false)
                setData(null)
                setError({
                    message: "Please check your internet connection"
                })
            })
  }

  function handleQuery(paramsObj){

    endpoint = new URL(endpoint)
    const searchParams = new URLSearchParams(paramsObj)
    endpoint.search = searchParams

    fetch(endpoint, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + tokens,
        }
    })
        .then((response) => {
            if (response.ok){
                let promise = response.json()
                promise
                    .then((resObj) => {
                        setIsLoading(false)
                        setData(resObj)
                        setError(null)
                    })
                        .catch(() => {
                            setIsLoading(false)
                            setData(null)
                            setError({
                                message: "Something went wrong. Dont worry we are on it."
                            })
                        })
            } else {
                let promise = response.json()
                promise
                    .then((resObj) => {
                        setIsLoading(false)
                        setData(null)
                        setError(resObj)
                    })
                        .catch(() => {
                            setIsLoading(false)
                            setData(null)
                            setError({
                                message: "Something went wrong. Dont worry we are on it."
                            })
                        })
            }
        })
            .catch(() => {
                setIsLoading(false)
                setData(null)
                setError({
                    message: "Please check your internet connection"
                })
            })
  };

  // eslint-disable-next-line
  useEffect(fetchData, [endpoint]);

  return { 
    data,
    setData,
    fetchData,
    isLoading,
    error,
    setError,
    handleQuery 
  };
};

export default useFetchOnMount;