import React from "react";
import styles from "./Projects.module.css";
import project1 from "../assets/portfolioimg.jpg";
import project2 from "../assets/portfolioimg.jpg";
import project3 from "../assets/portfolioimg.jpg";
import project4 from "../assets/portfolioimg.jpg";

const Projects = () => {
  const projectData = [
    { id: 1, image: project1, title: "Project One", description: "This is a responsive website built with React." },
    { id: 2, image: project2, title: "Project Two", description: "A modern web application with dynamic features." },
    { id: 3, image: project3, title: "Project Three", description: "A portfolio project showcasing UI/UX design." },
    { id: 4, image: project4, title: "Project Four", description: "A full-stack project using MERN stack." },
  ];

  return (
    <section className={styles.projectsSection} id="project">
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectGrid}>
        {projectData.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <div className={styles.overlay}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
