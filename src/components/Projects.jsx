import React from "react";
import styles from "./Projects.module.css";
import project1 from "../assets/Project1.jpeg";
import project2 from "../assets/Project2.jpeg";

const Projects = () => {
  const projectData = [
    { id: 1, image: project1, title: "E-Commerce Website", description: "This is a responsive website built with ReactJS." },
    { id: 2, image: project2, title: "Food Ordering Website", description: "A modern web application with dynamic features which is Fully responsive and made using ReactJs." },
    
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
