import React from "react";
import "./Footer.css";

function Footer({ word }) {
  return (
    <footer className="footer">
      <p>{word}</p>
    </footer>
  );
}

export default Footer;
