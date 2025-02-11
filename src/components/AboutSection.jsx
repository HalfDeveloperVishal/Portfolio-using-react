import React from "react";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.description}>
        Hello! I'm Vishal, a passionate Web Developer with experience in React, JavaScript, and modern web technologies. 
        I specialize in creating responsive, user-friendly websites and applications.  
        Over the years, I have worked on multiple projects, from **interactive websites** to **dynamic web applications**.
      </p>
      <p className={styles.description}>
        My expertise includes **React.js, JavaScript, HTML, CSS, and Bootstrap**, ensuring high-performance and visually appealing 
        web applications. I am constantly learning and improving to stay updated with the latest web trends.
      </p>
    </section>
  );
};

export default AboutSection;
