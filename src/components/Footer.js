import React from "react";

const Footer = () => {
  return (
    <div className="row footer">
      <div className="col-lg-9 footer-left">
        <div>
          <h2>ANISH KUMAR</h2>
          <p>
            Frontend focused Web Developer building the Frontend of Websites and
            Web Applications that leads to the success of the overall product
          </p>
        </div>
      </div>
      <div div className="col-lg-3 footer-right">
        <h2>SOCIAL</h2>
        <div className="d-flex align-items-center ">
          <a className="me-2" href="https://www.linkedin.com/in/anishyadavv/" target="_blank">
            <i
              class="fa-brands fa-linkedin fa-3x"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
          <a className="me-2" href="https://github.com/anishyadavv" target="_blank">
            <i
              class="fa-brands fa-3x fa-github"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
          <a href="https://www.instagram.com/anishyadavv/" target="_blank">
            <i class="fa-brands fa-square-instagram fa-3x" style={{color: "#ffffff"}}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
