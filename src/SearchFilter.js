import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Handle search, e.g., filter data based on the searchTerm
  };

  return (
    <div className="container mt-5">
      <h2>Search and Filter</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by work experience"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;

