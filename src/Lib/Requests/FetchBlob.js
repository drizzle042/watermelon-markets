import { useState } from "react";

const FetchBlob = (endpoint) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const tokens = localStorage.getItem("adminAccessToken") || "none"

  function fetchData(method="POST", data=null, sideEffect=null, contentType="application/json"){
    setIsLoading(true)
    var FetchOptions = {
        method,
        headers: {
            "Authorization": "Bearer " + tokens,
            "Content-Type": contentType
        },
        body: data,
    }
    fetch(endpoint, {...FetchOptions})
        .then((response) => {
            if (response.ok){
                let promise = response.blob()
                promise
                    .then((resObj) => {
                        setIsLoading(false)
                        setData(resObj)
                        setError(null)
                        if(sideEffect!=null) sideEffect(resObj)
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

  return { 
    data, 
    setData,
    fetchData, 
    isLoading, 
    error,
    setError
  };
};

export default FetchBlob;