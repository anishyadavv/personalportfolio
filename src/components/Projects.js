import React from "react";
import Project from "./Project";
import pedalpe from "../assets/pedalpe.jpg";
import mynotebook from "../assets/mynotebook.jpg";
import snakeGame from "../assets/SnakeGame.jpg";
import tictactoe from "../assets/tictactoe.jpg";
import musicPlayer from "../assets/musicplayer.jpg";
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
          <div className="underline"></div>
          <p className="mt-5" style={{ fontSize: "1.2rem", color: "#666" }}>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </div>
        <Project
          title="My Notebook"
          description="A web app where user can login and store their important notes. Notes can be deleted, edited and added."
          link="https://keepnoteshere.netlify.app/"
          image={mynotebook}
        />
        <Project
          title="SnakeGame"
          description="A website where user can play snake game. User can also see the high score of the game."
          link="https://anishyadavv.github.io/SnakeGame/"
          image={snakeGame}
        />
        <Project
          title="Zero Kaati"
          description="A place where you can play tic-tac-toe with your friends and enjoy the game."
          link="https://anishyadavv.github.io/tic-tac-toe/"
          image={tictactoe}
        />
        <Project
        title="Music Player"
        description="A website where user can listen Best of Pawan Singh songs."
        link="https://anishyadavv.github.io/MusicPlayer/"
        image={musicPlayer}
        />
        <Project
          title="Pedal pe"
          description="A web app where user can login and rent cycles on hourly basis inside campus."
          link="https://pedalpe.azurewebsites.net/"
          image={pedalpe}
        />
      </div>
    </div>
  );
};

export default Projects;
