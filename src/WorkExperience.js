import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const WorkExperience = () => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [dates, setDates] = useState('');

  const handleWorkExperienceSubmit = () => {
    // Handle form submission, e.g., send data to the server
  };

  return (
    <div className="container mt-5">
      <h2>Work Experience</h2>
      <form onSubmit={handleWorkExperienceSubmit}>
        <div className="form-group">
          <label>Company:</label>
          <input
            type="text"
            className="form-control"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Position:</label>
          <input
            type="text"
            className="form-control"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Dates:</label>
          <input
            type="text"
            className="form-control"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default WorkExperience;
