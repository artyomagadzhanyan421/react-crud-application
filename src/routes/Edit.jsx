import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

// Hooks
import useFetch from "../hooks/useFetch";

// Boxicons
import "boxicons";

const apiUrl = import.meta.env.VITE_API_URL; // Defined outside the component

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { jobs, loading } = useFetch(`${apiUrl}${id}`);

  const [edit, setEdit] = useState(false);
  const [trash, setTrash] = useState(false);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (jobs) {
      setTitle(jobs.title || "");
      setLocation(jobs.location || "");
      setType(jobs.type || "");
      setDescription(jobs.description || '');
    }
  }, [jobs]);

  const updateJob = { title, location, type, description }

  // Edit job
  const editFunc = (e) => {
    e.preventDefault();
    setEdit(true);

    fetch(`${apiUrl}${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateJob)
    }).then(() => {
      navigate(-1);
    })
  }

  // Delete job
  const deleteFunc = () => {
    setTrash(true);

    fetch(`${apiUrl}${id}`, {
      method: "DELETE"
    }).then(() => {
      navigate(-1);
    })
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
    document.title = "Loading...";

    return <div style={screen}>Loading...</div>
  } else {
    document.title = `Edit ${jobs.title}`;

    return (
      <div className='Edit'>
        <form className="job createJob" onSubmit={editFunc}>
          <center>
            <p className="title" style={{ marginBottom: 10 }}>Edit Job</p>
          </center>
          <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} />
          <input type="text" placeholder='Type' value={type} onChange={(e) => setType(e.target.value)} />
          <textarea placeholder='Description' style={{ height: "200px" }} value={description} onChange={(e) => setDescription(e.target.value)} />
          <div className="actions editJob">
            <button className='create' onClick={editFunc}>
              <box-icon name={edit ? "refresh" : "edit-alt"} color="white" size="24px"></box-icon>
              <span>{edit ? "Editing" : "Edit"}</span>
            </button>
            <button type="button" className='delete' onClick={deleteFunc}>
              <box-icon name={trash ? "refresh" : "trash"} color="white" size="24px"></box-icon>
              <span>{trash ? "Trashing" : "Trash"}</span>
            </button>
          </div>
        </form>
      </div>
    )
  }

}

export default Edit