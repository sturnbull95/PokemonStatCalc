import React, { Component } from "react";
import "../public/index.css";
const ChooseFirst = props => (
  <div>
    <form name="myForm">
      Name: <input onChange={props.handleInputChange1} value={props.firstPok} />
      <button onClick={props.firstPoke}> Log In</button>
    </form>
  </div>
);

module.exports = ChooseFirst;
