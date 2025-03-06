import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function useFetch(url) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);

        console.log(data);
      })
      .catch(err => console.log(err));
  }, [url]);

  return { jobs, loading }
}

export default useFetch