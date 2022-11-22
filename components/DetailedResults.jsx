import React from "react";
import styles from "../styles/DetailedResults.module.css";
import DetailResultCard from "./DetailResultCard";
function DetailedResults() {
  return (
    <section className={styles.detailCardList}>
      <DetailResultCard SoMeName="Facebook" TotalCO2="123" />
      <DetailResultCard SoMeName="Instagram" TotalCO2="23" />
      <DetailResultCard SoMeName="Twitter" TotalCO2="532" />
      <DetailResultCard SoMeName="Instagram" TotalCO2="45" />
      <DetailResultCard SoMeName="Instagram" TotalCO2="2" />
    </section>
  );
}

export default DetailedResults;
