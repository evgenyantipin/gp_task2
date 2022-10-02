import React from 'react';

const RetryButton = () => {
  return (
    <div className="col-md-4 alert alert-danger" role="alert">
      Произошла ошибка! &nbsp;
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => window.location.reload()}
      >
        Повторить запрос
      </button>
    </div>
  );
};

export default RetryButton;
