import React from 'react';
import { Link } from 'react-router';

// Components
import Jobs from '../components/Jobs';

// Hooks 
import useFetch from "../hooks/useFetch";

const apiUrl = import.meta.env.VITE_API_URL; // Defined outside the component

function Home() {
  const { jobs, loading } = useFetch(`${apiUrl}`);

  const block = {
    maxWidth: "1350px",
    margin: "auto"
  }

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
    return <div style={screen}>Loading...</div>
  } else {
    return (
      <div className='Home'>
        <div style={block}>
          <Link to="/create" className='create'>
            <box-icon name='plus-circle' color="white" size="24px"></box-icon>
            <span>Create</span>
          </Link>
        </div>
        <Jobs jobs={jobs} />
      </div>
    )
  }
}

export default Home