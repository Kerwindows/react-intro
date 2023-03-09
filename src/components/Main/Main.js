import React from "react";
import "./Main.css";

function Main({ handleClick }) {
  return (
    <div className="container">
      {/* <Form isRegistered = {userIsRegistered} /> */}
      Hello
      <button className="header__button" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default Main;
