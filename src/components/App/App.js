import React, { useState } from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  // let userIsRegistered = false;
  const [footerString, setFooterString] = useState("You did not click me yet");
  const [headerString, setHeaderString] = useState("You did not click me yet");

  function handleClick1() {
    setFooterString("You clicked me!");
  }

  function handleClick2() {
    setHeaderString("I was also clicked");
  }

  return (
    <>
      <Header title="This is a Header" headerString={headerString} />
      <Main handleClick1={handleClick1} handleClick2={handleClick2} />
      <Footer word={footerString} />
    </>
  );
}

export default App;
