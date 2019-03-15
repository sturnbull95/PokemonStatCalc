import React from "react";

const Suggestions = props => {
  const options = props.results.map(r => (
    <li onClick={props.choose.bind(r.name)} key={r.id}>
      {r.name}
    </li>
  ));
  return <ul>{options}</ul>;
};

export default Suggestions;
