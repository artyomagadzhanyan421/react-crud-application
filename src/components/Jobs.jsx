import React from 'react';
import { Link } from 'react-router';

// Boxicons
import "boxicons";

function Jobs({ jobs }) {
    return (
        <div className='Jobs'>
            {jobs.map((job) => (
                <div className="job" key={job.id}>
                    <p className="title">{job.title}</p>
                    <p className="location">{job.location} • <span>{job.type}</span></p>
                    <p className="description">{job.description}</p>

                    <div className="actions">
                        <Link to={`job/${job.id}`}>
                            <box-icon name='help-circle' color="white" size="24px"></box-icon>
                            <span>Read</span>
                        </Link>
                        <Link to={`edit/${job.id}`}>
                            <box-icon name='edit-alt' color="white" size="24px"></box-icon>
                            <span>Edit</span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Jobs