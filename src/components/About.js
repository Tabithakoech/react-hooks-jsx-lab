import React from "react";
import { image } from "../data/data";

function About() {
  return(
    <div id="About">
      <h2>About me</h2>
      <p>I Love singing</p>
      <img src={image} alt=""/>
    </div>  )
}

export default About;
