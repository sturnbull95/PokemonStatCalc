import React, { Component } from "react";
const Moves = props => {
  const options = props.moves
    .slice(0, 4)
    .map(r => <li key={r.id}>{r.moveName}</li>);
  return <ul>{options}</ul>;
};

module.exports = Moves;
