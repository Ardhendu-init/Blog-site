import React from "react";
import styles from "./footer.module.css";

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Ardhenduify. All rights reserved.</div>
      <div className={styles.social}>
        <div className={styles.icon}>
          <FaFacebook size={20} />
        </div>
        <div className={styles.icon}>
          <FaInstagram size={20} />
        </div>{" "}
        <div className={styles.icon}>
          <FaLinkedin size={20} />
        </div>{" "}
        <div className={styles.icon}>
          <FaYoutube size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
