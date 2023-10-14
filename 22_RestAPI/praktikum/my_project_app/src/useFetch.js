import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortControl = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortControl.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error("The data is failed to fetch for that resource");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log('fetch aborted')
          } else {
            setIsLoading(false);
            setError(error.message);
          }
        });
    }, 1000);

    return () => {
      abortControl.abort();
    };
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
