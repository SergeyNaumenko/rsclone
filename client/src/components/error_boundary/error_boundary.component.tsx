import React from 'react';
import './error_boundary.css';
import image from './error.png';

const ErrorBoundary: React.FunctionComponent = () => {
  return (
    <div className="error-component">
      <div className="text">
        <span>Oops! Something went wrong.</span>
        <span>Requested data is not available.</span>
      </div>
      <img src={image} alt="error" />
    </div>
  );
};

export default ErrorBoundary;
