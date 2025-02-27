import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"; // Importing Icons
import BoyLaptop from "../assets/undraw_hello_ccwj.svg"; // Correct path

function Home() {
  return (
    <div style={homeContainer}>  
      
      {/* Left Section - Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={textContainer}
      >
        <h1>Hello 👋.</h1>
        <h1> I'm <span style={{ color: "#4CAF50" }}>Himanshu Mali</span>.</h1> 
        <h3> 2nd-year Computer Engineering student</h3>
        <h3> I am interested in creating dynamic, responsive web applications that provide an excellent user experience.</h3>
        <h3>With expertise in <strong>React.js, JavaScript, MySQL</strong>.</h3>
        <h3>Let's create something amazing together! 🚀</h3>
        <h4>Explore my journey and projects.</h4>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com/HimanshuMali701" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon"/>
          </a>
          <a href="https://www.linkedin.com/in/himanshu-mali-900568291/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon"/>
          </a>
          <a href="mailto:himanshu.mali701@gmail.com">
            <FaEnvelope className="social-icon"/>
          </a>
          <a href="https://instagram.com/himanshu_mali_16/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon"/>
          </a>
        </div>

      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={imageContainer}
      >
      <img src="/images/undraw_hello_ccwj.svg" alt="Boy with Laptop" className="home-image" style={{ width: "350px", height: "auto" }} />
      </motion.div>

    </div>
  );
}

const homeContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "100px",
  textAlign: "left",
};

const textContainer = {
  flex: 1,
  paddingRight: "50px",
};

const imageContainer = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
};

export default Home;
