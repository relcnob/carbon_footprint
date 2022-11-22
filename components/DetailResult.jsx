import React from "react";
import styles from "../styles/DetailResult.module.css";
import DetailResultCard from "./DetailResutCard";
function DetailResult() {
  return (
    <section className={styles.detailCardList}>
      <DetailResultCard SoMeName="Facebook" TotalCO2="123" />
    </section>
  );
}

export default DetailResult;
