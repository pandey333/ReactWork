import React from "react";

function Tablehead(props) {
  const header = props.header;
  return (
    <thead>
      <tr>
        <th>{header.id}</th>
        <th>{header.name}</th>
        <th>{header.department}</th>
        <th>{header.salary}</th>
      </tr>
    </thead>
  );
}

export default Tablehead;
