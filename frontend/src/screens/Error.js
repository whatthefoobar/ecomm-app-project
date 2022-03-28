import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
      <h2>404</h2>
      <p>OOPS!</p>
      <p>That page doesn't exist or is unavaileble.</p>
      <Link to="/" className="btn btn-outline-dark">
        Go back to Home
      </Link>
    </div>
  );
};

export default Error;
