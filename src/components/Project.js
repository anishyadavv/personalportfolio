import React from "react";
import Button from "react-bootstrap/Button";

const Project = (props) => {
  let { title, description, link,image} = props;
  return (
    <div>
      <div className="row project-content mb-5">
        <div className="col-lg-7 project-left text-center ps-5 pe-5 mb-5">
          <img src={image} alt="" style={{ width: "100%",opacity:"1" }} />
        </div>
        <div className="col-lg-5 project-right m-auto pe-5 ps-5">
          <h2 className="mb-4" style={{ color: "#000", fontWeight: "700" }}>
            {title}
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#666" }}>{description}</p>
          <a href={link} target="_blank">
            <Button variant="primary" size="lg" className="mt-5 shadow">
              VISIT SITE
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
