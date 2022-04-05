import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  console.log(props);
  return (
    <div id="main">
      <p>{props.name}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default App;
