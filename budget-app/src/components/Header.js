import React from "react";
import logo from "../img/expenses.png";

export const Header = () => {
  return (
    <div id="header-container">
      <img src={logo} alt="pic" />
      <h1 id="title">Budget App</h1>
    </div>
  );
};
