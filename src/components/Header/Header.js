import React from "react";
import "./Header.css";

function Header({ title }) {
  return (
    <header className="header">
      <div className="header__title">{title}</div>
    </header>
  );
}

export default Header;
