import React from 'react';

const Loader = () => {
  return (
    <div className="pt-5 m-5">
      <div
        className="spinner-border text-danger"
        role="status"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
