import React from "react";
import { name, city } from "../data/data.js";
const divStyle = {
  color:'firebrick'
};
function Home() {
  // update the JSX being returned!
  return (
  <div id="Home">
    <h1 style={divStyle} > {name} is a Web Developer from  {city} city</h1>
  </div>)
  
}

export default Home;
