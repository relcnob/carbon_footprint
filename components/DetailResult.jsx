import React from "react";
import styles from "../styles/DetailResult.module.css";
import DetailResultCard from "./DetailResutCard";
function DetailResult() {
  return (
    <section className={styles.detailCardList}>
      <DetailResultCard />
      <DetailResultCard />
      <DetailResultCard />
      <DetailResultCard />
    </section>
  );
}

export default DetailResult;
