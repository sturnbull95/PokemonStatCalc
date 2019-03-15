import React, { Component } from "react";
const ChooseSecond = props => (
  <div>
    <form name="myForm">
      Name:{" "}
      <input onChange={props.handleInputChange2} value={props.secondPok} />
      <button onClick={props.secondPoke}> Log In</button>
    </form>
  </div>
);

module.exports = ChooseSecond;
