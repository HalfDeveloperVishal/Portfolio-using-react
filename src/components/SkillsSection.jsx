import React from "react";
import styles from "./SkillsSection.module.css";
import HtmlImg from '../assets/htmlimg.jpg'
import CssImg from "../assets/Cssimg.jpg"
import Javascript from "../assets/JavaScriptImg.jpg"
import ReactImg from "../assets/ReactImg.jpg"
import PythonImg from "../assets/PythonImg.jpg"

const SkillsSection = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.heading}>My Skills</h2>

      <div className={styles.cardConatiner}>
        <div className={`card ${styles.card}`} style={{ width: "18rem" }}>
          <img src={HtmlImg} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">HTML</h5>
            <p class="card-text">
            HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It provides the basic framework of a webpage.
            </p>
           
          </div>
        </div>
        <div className={`card ${styles.card}`} style={{ width: "18rem" }}>
          <img src={CssImg} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">CSS</h5>
            <p class="card-text">
            CSS is used to style HTML elements, making webpages visually appealing. It controls layout, colors, fonts, and responsiveness.
            </p>
            
          </div>
        </div>
        <div className={`card ${styles.card}`} style={{ width: "18rem" }}>
          <img src={Javascript} class="card-img-top" alt="... "  />
          <div class="card-body">
            <h5 class="card-title">JavaScript</h5>
            <p class="card-text">
            JavaScript is a programming language that adds interactivity to web pages. It enables dynamic updates, event handling, and animations.
            </p>
           
          </div>
        </div>
        <div className={`card ${styles.card}`} style={{ width: "18rem" }}>
          <img src={ReactImg} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">React.JS</h5>
            <p class="card-text">
            React.js is a JavaScript library for building user interfaces, particularly single-page applications (SPAs).
            </p>
            
          </div>
        </div>
        <div className={`card ${styles.card}`} style={{ width: "18rem" }}>
          <img src={PythonImg} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Python</h5>
            <p class="card-text">
            Python is a high-level, interpreted, and general-purpose programming language known for its simplicity and readability. It was created by Guido van Rossum and released in 1991.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
