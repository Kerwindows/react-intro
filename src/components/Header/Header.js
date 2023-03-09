import React from "react";
import "./Header.css";

function Header({ title, headerString }) {
  return (
    <header className="header">
      <div className="header__title">{title}</div>
      <p className="header__paragraph">{headerString}</p>
    </header>
  );
}

export default Header;
