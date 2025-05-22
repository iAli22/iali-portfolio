import React from "react";
import { Skills, Contact, Projects, OtherSkills } from "../components";

const MainContent = () => {
  return (
    <div className="main-section">
      <div className="img-container">
        <div className="img" />
        <div className="img-anime" />
      </div>
      <h1>Ali Mahdi</h1>
      <h3>
        <span id="my-skills" />
        Senior FrontEnd Developer
      </h3>

      <div className="space" />

      <Projects />

      <div className="space" />

      <Skills />

      <div className="space" />

      <OtherSkills />

      <div className="space" />

      <Contact />
    </div>
  );
};

export default MainContent;
