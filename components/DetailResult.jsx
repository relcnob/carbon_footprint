import React from "react";
import styles from "../styles/DetailResult.module.css";
import DetailResultCard from "./DetailResutCard";
function DetailResult() {
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

export default DetailResult;
