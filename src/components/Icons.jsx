import React from "react";
import * as FontAwesome from "react-icons/si";

function Icons({ name }) {
  console.log("name", name);
  const iconString = "Si" + name;
  console.log("name", iconString);
  const icon = React.createElement(FontAwesome[iconString]);
  return <div style={{ fontSize: 24, color: "green" }}>{icon}</div>;
}

export default Icons;
