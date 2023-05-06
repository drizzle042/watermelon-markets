import { useState } from "react";

const usePost = (endpoint) => {
  
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const [messageSeverity, setMessageSeverity] = useState(null)
  const tokens = localStorage.getItem("adminAccessToken") || "none"

  function postFunc(data, sideEffect=null, method="POST", contentType="application/json"){
    setIsLoading(true)
    fetch(endpoint, {
        method: method,
        headers: {
            "Authorization": "Bearer " + tokens,
            "Content-Type": contentType
        },
        body: data
    })
        .then((response) => {
            if (response.ok){
                let promise = response.json()
                promise
                    .then((resObj) => {
                        setIsLoading(false)
                        setMessageSeverity("success")
                        setMessage(resObj);
                        if(sideEffect!=null) sideEffect()
                    })
                        .catch(() => {
                            setIsLoading(false)
                            setMessageSeverity("error")
                            setMessage({
                                message: "Something went wrong. Don't worry we are on it."
                            })
                        })
            } else {
                let promise = response.json()
                promise
                    .then((resObj) => {
                        setIsLoading(false)
                        setMessageSeverity("error")
                        setMessage(resObj);
                    })
                        .catch(() => {
                            setIsLoading(false)
                            setMessageSeverity("error")
                            setMessage({
                                message: "Something went wrong. Don't worry we are on it."
                            })
                        })
            }
        })
            .catch(() => {
                setIsLoading(false)
                setMessageSeverity("error")
                setMessage({
                    message: "Please check your internet connection"
                })
            })
  }

  return {
    message,
    setMessage,
    messageSeverity,
    isLoading,
    postFunc,
}
}

export default usePost;