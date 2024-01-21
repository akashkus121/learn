import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import web from "../src/image/Untitled design-fotor-2023091921488.jpg";
import "./index.css"; // Import a CSS file for styling

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Function to update the current time and date
  const updateTimeAndDate = () => {
    setCurrentTime(new Date());
  };

  // Set up an interval to update the time and date every second
  useEffect(() => {
    const intervalId = setInterval(updateTimeAndDate, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluif nav_bg ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Welcome to LearnNewsShopHub</h1>
                    <h2>
                      Discover a world of knowledge, stay up-to-date with the latest news, and explore exciting shopping opportunities - all in one place!
                    </h2>
                
                  <div className="mt-3">
                    <Link to="/service" className="btn-get-started">
                      Get started
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 header-img">
                  <img src={web} className="img-fluid animated" width="100" alt="home img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <div className="clockdate-wrapper">
        <p>
            Time: {currentTime.toLocaleTimeString()} | Date: {currentTime.toLocaleDateString()}
        </p>
      </div>
    </>
  );
};

export default Home;
