import React from "react";
import Form from "./Form";
const Home = () => {
  return (
    <>
      <div className="continer my-3">
        <h2>Add a Note</h2>
        <Form />
        <div>
          <h2 className="continer my-3">Your Notes</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
