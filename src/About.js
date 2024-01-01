import React from "react";
import MultiplePizzas from "../src/image/ak.png";
import "./About.css";
function About() {
  return (
    <>
     <div className="about">
      <div
        className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h2> ABOUT ME</h2>
        <p>
        I'm Akash Kushwaha, currently pursuing a Bachelor's degree in Mechanical Engineering. Passionate about the intersection of technology and engineering, I find joy in solving real-world problems through innovative solutions. In the ever-evolving world of mechanical engineering, I am driven to explore new concepts and technologies that contribute to advancements in the field.
        </p>
      </div>
    </div>
    <div>
   


    </div>
    </>
    
   
  );
}

export default About;
