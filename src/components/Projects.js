import React from 'react'
import Button from "react-bootstrap/Button";
import pedalpe from "../assets/pedalpe.jpg"
const Projects = () => {
  return (
    <div>
      <div id="project" className="project-section  me-4 ms-4">
        <div className="about-main  text-center m-auto">
          <h2
            className="text-center project-heading"
            style={{ fontWeight: "700" }}
          >
            PROJECTS
          </h2>
          <div className='underline'></div>
          <p className="mt-5" style={{ fontSize: "1.2rem", color: "#666" }}>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </div>

        <div className="row project-content mb-5">
          <div className="col-lg-7 project-left text-center ps-5 pe-5 mb-5">
            <img src={pedalpe} alt="" style={{width:'100%'}}/>
          </div>
          <div className="col-lg-5 project-right m-auto pe-5 ps-5">
            <h2 className="mb-4" style={{ color: "#000", fontWeight: "700" }}>
              Pedal pe
            </h2>
            <p  style={{ fontSize: "1.1rem", color: "#666" }}>
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </p>
            <Button variant="primary" size="lg" className="mt-5 shadow">
              VISIT SITE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects
