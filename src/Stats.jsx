import React, { Component } from "react";
import "../public/index.css";
const Stats = props => (
  <ul>
    <li>Health: {props.firstSelect.healthStat}</li>
    <li>Attack: {props.firstSelect.attStat}</li>
    <li>Defense: {props.firstSelect.defStat}</li>
    <li>Sp Att: {props.firstSelect.spAttStat}</li>
    <li>Sp Def: {props.firstSelect.spDefStat}</li>
    <li>Speed: {props.firstSelect.speedStat}</li>
  </ul>
);

module.exports = Stats;
