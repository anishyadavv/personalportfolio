import React from 'react'
import Button from "react-bootstrap/Button";
const Hero = () => {
  return (
    <div className="heroSection" id="home">
      <div className="content">
        <h1 className="heading">HEY, I'M ANISH KUMAR</h1>
        <p>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <a href="#project">
          <Button variant="primary" size="lg" className="shadow">
            PROJECTS
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Hero
