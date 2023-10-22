import React from 'react'
import Button from "react-bootstrap/Button";
const Hero = () => {
  return (
    <div className="heroSection" id="home">
      <div className="content">
        <h1 className="heading">HEY, I'M ANISH KUMAR</h1>
        <p>
          Frontend Developer building seamless digital experiences for
          next-level products.
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
