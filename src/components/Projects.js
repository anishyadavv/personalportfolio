import React from "react";
import Project from "./Project";
import mynotebook from "../assets/mynotebook.png";
import snakeGame from "../assets/SnakeGame.png";
import tictactoe from "../assets/tictactoe.png";
import musicPlayer from "../assets/musicplayer.png";
import textword from "../assets/textword.png";
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
      title: "Music Player",
      description: "A website where user can listen Best of Pawan Singh songs.",
      link: "https://anishyadavv.github.io/MusicPlayer/",
      tech: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/anishyadavv/MusicPlayer",
      image: musicPlayer,
    },
    {
      title: "TextWordLine",
      description:
        "A React app where user can count the words, characters and line of paragraphs and also user can calculate how much time it will take to read the paragraph along with that user can convert text into Uppercase and Lowercase.",
      link: "https://textwordline.netlify.app/",
      githubLink: "https://github.com/anishyadavv/TextUtils-React-first",
      tech: "React, Bootstrap",
      image: textword,
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
              <Project key={project.link} title={project.title} description={project.description} link={project.link} image={project.image} tech={project.tech} githubLink = {project.githubLink}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default Projects;
