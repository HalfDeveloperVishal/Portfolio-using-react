import React from "react";
import styles from "./ContactMe.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactMe = () => {
  return (
    <footer className={styles.footer} id="ContactMe">
      <h2 className={styles.heading}>Contact Me</h2>
      <div className={styles.contactContainer}>
        <div className={styles.contactBox}>
          <FaEnvelope className={styles.icon} />
          <p>vs9771826941@gmail.com</p>
        </div>
        <div className={styles.contactBox}>
          <FaPhone className={styles.icon} />
          <p>+91 6206390989</p>
        </div>
        <div className={styles.contactBox}>
          <FaMapMarkerAlt className={styles.icon} />
          <p>India , Haryana , Bhiwani</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactMe;
