import React from "react";

const Alert = (props) => {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        <h1>okay</h1>
        {props.message}
      </div>
    </div>
  );
};

export default Alert;
