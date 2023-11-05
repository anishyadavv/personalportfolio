import React from "react";
import Button from "react-bootstrap/Button";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div className="heroSection" id="home">
      <div className="content">
        <h1 className="heading">
          <TypeAnimation
            sequence={["HEY, I'M ANISH KUMAR", 2000, "I'M A DEVELOPER", 2000]}
            speed={5}
            repeat={Infinity}
            style={{ fontSize: "1em" }}
          />
        </h1>
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
};

export default Hero;
