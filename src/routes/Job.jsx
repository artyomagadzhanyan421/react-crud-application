import React from 'react';
import { useParams } from 'react-router';

import useFetch from '../hooks/useFetch';

function Job() {
  const { id } = useParams();

  const { jobs, loading } = useFetch(`http://localhost:5000/jobs/${id}`);

  const screen = {
    background: "#0F172A",
    color: "white",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    padding: 50
  }

  if (loading) {
    document.title = "Loading...";

    return <div style={screen}>Loading...</div>
  } else {
    document.title = `${jobs.title}`;

    return (
      <div className='Job'>
        <div className="job jobData">
          <p className="title">{jobs.title}</p>
          <p className="location">{jobs.location} • <span>{jobs.type}</span></p>
          <p className="description">{jobs.description}</p>
        </div>
      </div>
    )
  }

}

export default Job