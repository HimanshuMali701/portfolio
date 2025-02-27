import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav style={{
      background: darkMode ? "#222" : "#333",
      padding: "15px",
      textAlign: "center",
      position: "fixed",
      width: "100%",
      top: 0,
      left: 0,
      zIndex: 1000,
      transition: "0.3s"
    }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/education" style={linkStyle}>Education</Link>
      <Link to="/projects" style={linkStyle}>Projects</Link>
      <Link to="/experience" style={linkStyle}>Experience</Link>
      <Link to="/skills" style={linkStyle}>Skills</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        style={buttonStyle}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

const linkStyle = {
  color: "#fff",
  fontSize: "1.2rem",
  margin: "0 15px",
  textDecoration: "none",
  cursor: "pointer"
};

const buttonStyle = {
  marginLeft: "20px",
  padding: "5px 10px",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
  fontSize: "1rem"
};

export default Navbar;
