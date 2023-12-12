import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2>Welcome to the Landing Page</h2>
        <p className="lead">Please select an option below:</p>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-6">
          <Link to="/register" className="btn btn-primary btn-lg btn-block mb-2">
            Register
          </Link>
          <Link to="/login" className="btn btn-secondary btn-lg btn-block">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
