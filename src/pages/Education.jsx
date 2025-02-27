import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Import the theme context
import "./Education.css";

const Education = () => {
  const { darkMode } = useContext(ThemeContext); // Get Dark Mode state

  return (
    <section id="education" className={`education-section ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h2 className="education-title">📚 Education</h2>

      <div className="education-container">
        <div className="education-card">
          <h3>Bachelor of Technology</h3>
          <p className="college-name">C.K. Pithawala College of Engg. & Tech, SURAT</p>
          <p className="year">2023 - 2027</p>
          <p className="status">Pursuing</p>
        </div>

        <div className="education-card">
          <h3>Higher Secondary School, PCM</h3>
          <p className="college-name">T.&T.V. Sarvajanik School, SURAT</p>
          <p className="year">2020 - 2022</p>
          <p className="grade">Grade: 72.42%</p>
        </div>

        <div className="education-card">
          <h3>Secondary School</h3>
          <p className="college-name">Samiti Gujarati Medium School, SURAT</p>
          <p className="year">2021</p>
          <p className="grade">Grade: 89.71%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
