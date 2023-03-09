import React, { useState } from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  // let userIsRegistered = false;
  const [string, setString] = useState([]);

  function handleClick() {
    setString("You clicked me!");
  }

  return (
    <>
      <Header title="This is a Header" />
      <Main handleClick={handleClick} />
      <Footer word={string} />
    </>
  );
}

export default App;
