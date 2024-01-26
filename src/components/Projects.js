import React from "react";
import Project from "./Project";
import mynotebook from "../assets/mynotebook.png";
import snakeGame from "../assets/SnakeGame.png";
import tictactoe from "../assets/tictactoe.png";
import musicPlayer from "../assets/musicplayer.png";
import apple from "../assets/Apple.jpg";
import pedalpe from "../assets/pedalpe.jpg";
const Projects = () => {

  const projects = [
    {
      title: "My Notebook",
      description:
        "A web app where user can login and store their important notes. Notes can be deleted, edited and added.",
      tech: "React, Node, Express, MongoDB, Bootstrap",
      link: "https://keepnoteshere.onrender.com/",
      githubLink: "https://github.com/anishyadavv/MyNotebook",
      image: mynotebook,
    },
    {
      title: "Apple Clone",
      description:
        "Clone of Apple India website to showcase my frontend skills",
      link: "https://appleindi.netlify.app/",
      tech: "HTML, CSS, JavaScript, React",
      githubLink: "https://github.com/anishyadavv/AppleHomePage",
      image: apple,
    },
    {
      title: "Music Player",
      description: "A website where user can listen Best of Pawan Singh songs.",
      link: "https://anishyadavv.github.io/MusicPlayer/",
      tech: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/anishyadavv/MusicPlayer",
      image: musicPlayer,
    },
    {
      title: "Pedal Pe",
      description:
        "A Web App where user can rent a bicycle on hourly basis. This app has proper Authentication system, only verified user can use this application. Features like forgot password and payment works seamlessly",
      link: "https://pedalpe.azurewebsites.net/",
      tech: "HTML, CSS, JavaScript, NodeJS, Express, Mongo DB, EJS",
      githubLink: "https://github.com/anishyadavv/Pedal-Pe",
      image: pedalpe,
    },
    {
      title: "Zero Kaati",
      description:
        "A place where you can play tic-tac-toe with your friends and enjoy the game.",
      link: "https://anishyadavv.github.io/tic-tac-toe/",
      tech: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/anishyadavv/tic-tac-toe",
      image: tictactoe,
    },
    {
      title: "SnakeGame",
      description:
        "A website where user can play snake game. User can also see the high score of the game.",
      link: "https://snakezzgame.netlify.app/",
      tech: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/anishyadavv/SnakeGame",
      image: snakeGame,
    },
  ];

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
          <div className="underline"></div>
          <p className="mt-5" style={{ fontSize: "1.2rem", color: "#666" }}>
            Here you will find some of the personal and clients projects that I
            created
          </p>
        </div>

        {
          projects.map((project)=>{
            return(
              <Project
                key={project.link}
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
                tech={project.tech}
                githubLink = {project.githubLink}
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default Projects;
