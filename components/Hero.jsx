import React from "react";
import DownArrow from "./DownArrow";
import styles from "../styles/Hero.module.css";
function Hero() {
  return (
    <div className="container">
      <div className={styles.Hero}>
        <h1>Calculate your social media carbon emissions</h1>
        <DownArrow />
      </div>
    </div>
  );
}

export default Hero;
