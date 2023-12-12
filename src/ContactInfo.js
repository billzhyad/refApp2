import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactInfo = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContactInfoSubmit = () => {
    // Handle form submission, e.g., send data to the server
  };

  return (
    <div className="container mt-5">
      <h2>Contact Information</h2>
      <form onSubmit={handleContactInfoSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactInfo;
