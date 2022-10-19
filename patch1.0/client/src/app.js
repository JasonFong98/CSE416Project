import React, { useState } from "react";
import Home from "./home.js";
import States from "./states/states";

const App = (props) => {
  const [state, setState] = useState("home");

  const handleClick = (state) => {
    setState(state);
  };

  const handleHome = () => {
    setState("home");
  };

  let render;
  if (state === "home") {
    render = (
      <div>
        <Home handleClick={handleClick} state={state} />
      </div>
    );
  } else {
    render = (
      <div>
        <States handleHome={handleHome} state={state} />
      </div>
    );
  }

  // else if(state === "Florida"){
  //    render=<div><Florida handleHome={handleHome} /></div>;
  // }else if(state === "Ohio"){
  //     render=<div><Ohio handleHome = {handleHome}/></div>;
  // }else if(state === "North Carolina"){
  //     render=<div><NorthCarolina handleHome = {handleHome}/></div>;
  // }

  return <div>{render}</div>;
};

export default App;
