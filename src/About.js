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
        <h2> ABOUT US</h2>
        <p>
          Our Mission At LearnNewsShopHub, we believe in simplifying the online
          experience. In a world where information and opportunities are vast,
          we're here to connect you to the resources that matter most. Our
          mission is to: Empower Learning: We're passionate about education. Our
          platform offers a diverse range of courses, ensuring that knowledge is
          accessible to all, regardless of your background or location. 
           Why Choose LearnNewsShopHub Convenience:
          We bring together the best online resources in one place, saving you
          time and effort.
        </p>
      </div>
    </div>
    <div>
   


    </div>
    </>
    
   
  );
}

export default About;
