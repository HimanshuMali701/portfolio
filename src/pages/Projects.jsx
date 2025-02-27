import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Website",
    image: "/images/E-com.png",
    preview: "https://e-commerce-himanshu-apparel-store.vercel.app/",
    source: "https://github.com/HimanshuMali701/E-Commerce-Website",
  },
  {
    title: "Portfolio Website",
    image: "/images/portfolio.png",
    preview: "https://himanshu-portfolio-alpha.vercel.app/",
    source: "https://github.com/your-portfolio-repo",
  },
 /* {
    title: "Retail Analytics Dashboard",
    image: "/images/dashboard.jpg",
    preview: "https://your-dashboard-preview.com",
    source: "https://github.com/your-dashboard-repo",
  },*/
];

const Projects = () => {
  const { darkMode } = useContext(ThemeContext); // Get dark mode state

  return (
    <section className={`projects-section ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h2 className="projects-title">🚀 My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <div className="project-buttons">
              <a href={project.preview} target="_blank" rel="noopener noreferrer" className="btn preview-btn">
                🔍 Preview
              </a>
              <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn source-btn">
                💻 Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
