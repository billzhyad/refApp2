import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactSharing = () => {
  const [contactToShare, setContactToShare] = useState('');

  const handleShareContact = () => {
    // Handle contact sharing, e.g., send contact information to another user
  };

  return (
    <div className="container mt-5">
      <h2>Contact Sharing</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter contact information to share"
          value={contactToShare}
          onChange={(e) => setContactToShare(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={handleShareContact}>
            Share Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSharing;
