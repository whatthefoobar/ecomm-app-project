import './Error.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  let navigate = useNavigate();
  return (
    <div className="error d-flex flex-column justify-content-center align-items-center">
      <h2 className="error__header">404</h2>
      <p className="error__paragraph">
        OOPS! That page doesn't exist or is unavaileble.
      </p>
      {/* <p className="error__paragraph">
        That page doesn't exist or is unavaileble.
      </p> */}
      <button className="btn btn-outline-dark" onClick={() => navigate('/')}>
        Go back to Home
      </button>
      {/* <Link to="/" className="btn btn-outline-dark">
        Go back to Home
      </Link> */}
    </div>
  );
};

export default Error;
