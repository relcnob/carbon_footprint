import React from "react";
import styles from "../styles/DetailResultCard.module.css";

import Image from "next/image";

function DetailResultCardItem(props) {
  let amount = (props.TotalCO2 * props.conversion).toFixed(2);

  return (
    <li className={styles.li}>
      <Image src={props.svg} alt={props.type} width="auto" height="20"></Image>
      <div className={styles.line}></div>
      <p className={styles.p}>
        Equal to {amount} {props.unit} {props.action} {props.type}
      </p>
    </li>
  );
}

export default DetailResultCardItem;
