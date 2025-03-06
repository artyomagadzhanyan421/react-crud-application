import React, { useState } from 'react';
import { useNavigate } from 'react-router';

// Boxicons
import "boxicons";

function Create() {
    document.title = "React Application | Create Job";
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");

    const [disabled, setDeisabled] = useState(false);

    const createJob = (e) => {
        e.preventDefault();
        const job = { title, location, type, description }

        setDeisabled(true)

        fetch("http://localhost:5000/jobs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(job)
        }).then(() => {
            navigate(-1);
        })
    }

    return (
        <div className='Create'>
            <form className="job createJob" onSubmit={createJob}>
                <center>
                    <p className="title" style={{ marginBottom: 10 }}>Create Job</p>
                </center>
                <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} required />
                <input type="text" placeholder='Type' value={type} onChange={(e) => setType(e.target.value)} required />
                <textarea placeholder='Description' style={{ height: "200px" }} value={description} onChange={(e) => setDescription(e.target.value)} required />
                <button type="submit" className='create'>
                    <box-icon name={disabled ? "refresh" : "plus-circle"} color="white" size="24px"></box-icon>
                    <span>{disabled ? "Loading..." : "Create"}</span>
                </button>
            </form>
        </div>
    )
}

export default Create