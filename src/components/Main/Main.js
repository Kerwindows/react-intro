import React from "react";
import "./Main.css";

function Main({ handleClick1, handleClick2 }) {
  return (
    <div className="main">
      {/* <Form isRegistered = {userIsRegistered} /> */}
      <h1 className="main__title">Hello</h1>
      <button className="main__button" onClick={handleClick2}>
        Header
      </button>
      <button className="main__button" onClick={handleClick1}>
        Footer
      </button>
    </div>
  );
}

export default Main;
