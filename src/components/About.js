import React from 'react'
import Button from "react-bootstrap/Button";
const About = () => {
  return (
    <div>
      <div id="about" className="aboutSection pt-5 ps-5 me-5">
        <div className="about-main  text-center m-auto">
          <h2
            className="text-center about-heading"
            style={{ fontWeight: "700" }}
          >
            ABOUT ME
          </h2>
          <p className="mt-5" style={{ fontSize: "1.2rem", color: "#666" }}>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>

        <div className="row about-content mt-5">
          <div className="col-lg-6 about-left">
            <h2 className="mb-5" style={{ color: "#000", fontWeight: "700" }}>
              Get to know me!
            </h2>
            <div>
              I'm a{" "}
              <span style={{ color: "#555", fontWeight: "bold" }}>
                {" "}
                Frontend Web Developer
              </span>{" "}
              building the Front-end of Websites and Web Applications that leads
              to the success of the overall product. Check out some of my work
              in the
              <span style={{ color: "#555", fontWeight: "bold" }}>
                {" "}
                Projects
              </span>{" "}
              section.
            </div>
            <div>
              I also like sharing content related to the stuff that I have
              learned over the years in
              <span style={{ color: "#555", fontWeight: "bold" }}>
                {" "}
                Web Development
              </span>{" "}
              so it can help other people of the Dev Community. Feel free to
              Connect or Follow me on my Linkedin where I post useful content
              related to Web Development and Programming
            </div>
            <div>
              I'm open to{" "}
              <span style={{ color: "#555", fontWeight: "bold" }}>Job </span>
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don't hesitate to{" "}
              <span style={{ color: "#555", fontWeight: "bold" }}>
                {" "}
                contact
              </span>{" "}
              me.
            </div>

            <Button variant="primary" size="lg" className="mt-5 shadow">
              CONTACT
            </Button>
          </div>
          <div className="col-lg-6 about-right">
            <h2 className="mb-5" style={{ color: "#000", fontWeight: "700" }}>
              My Skills
            </h2>
            <div className="skill-section">
              <div className="skill-tag">HTML</div>
              <div className="skill-tag">CSS</div>
              <div className="skill-tag">JavaScript</div>
              <div className="skill-tag">React</div>
              <div className="skill-tag">GIT</div>
              <div className="skill-tag">Github</div>
              <div className="skill-tag">Responsive Design</div>
              <div className="skill-tag">Express Basics</div>
              <div className="skill-tag">SQL Basics</div>
              <div className="skill-tag">Node Basics</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
