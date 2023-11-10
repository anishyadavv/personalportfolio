import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar shadow">
        <a
          href="https://www.linkedin.com/in/anishyadavv/"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-linkedin fa-3x"
            style={{ color: "#3a3a3a" }}
          ></i>
        </a>
        <a
          href="https://github.com/anishyadavv"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-3x fa-github"
            style={{ color: "#3a3a3a" }}
          ></i>
        </a>
        <a
          href="https://www.instagram.com/anishyadavv/"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-square-instagram fa-3x"
            style={{ color: "#3a3a3a" }}
          ></i>
        </a>
        <a
          href="https://twitter.com/AnishYadav32381"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-3x fa-square-x-twitter"
            style={{ color: "#3a3a3a" }}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
