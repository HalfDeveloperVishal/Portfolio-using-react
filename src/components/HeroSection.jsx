import React from "react";
import styles from "./HeroSection.module.css"
import profileImage from "./portfolioimg.jpg";
const HeroSection = ()=>{
    return (
        <div className={styles.developerSection}>
          {/* Left Side - Developer Info */}
          <div className={styles.developerInfo}>
            <h2>Hello, I'm Vishal</h2>
            <p>
              A passionate Web Developer skilled in React, JavaScript, and modern web technologies.
              I build interactive, scalable, and responsive applications.
            </p>
            <button className={styles.contactBtn} >Contact Me</button>
          </div>
    
          {/* Right Side - Developer Photo */}
          <div className={styles.developerPhoto}>
            <img src={profileImage} alt="Developer" />
          </div>
        </div>
      );
}
export default HeroSection;