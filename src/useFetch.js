// making custom hook
import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    // to simulate fetching data
    setTimeout(() => {
      fetch(url, { signal: abortController.signal }) // associate abortController with signal
        .then(res => {
          // console.log(res);
          if (!res.ok) {
            throw Error('Could not fetch data from resource!');
          }
          return res.json();
        })
        .then(data => {
          // console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortController.abort();
  }, [url]); // useEffect dependancy

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
