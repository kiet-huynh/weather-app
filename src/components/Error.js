import React from 'react';

const Error = ({ message }) => (
  <div className="error">
    <span className="error-icon">⚠️</span>
    <p>{message}</p>
    <button onClick={() => window.location.reload()}>Try Again</button>
  </div>
);

export default Error;
