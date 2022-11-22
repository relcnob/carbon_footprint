import React from "react";
import styles from "../styles/DetailResultCard.module.css";
import facebook from "../public/facebook.svg";
import car from "../public/car.svg";
import airplane from "../public/airplane.svg";
import beef from "../public/beef.svg";
import banana from "../public/banana.svg";
import water from "../public/water.svg";
import Image from "next/image";

function DetailResultCardItem(props) {
  return (
    <li className={styles.li}>
      <Image src={props.type} alt="car icon" width="auto" height="20"></Image>

      <div className={styles.line}></div>
      <p className={styles.p}>
        Equal to <span>{props.data}</span> km in a car
      </p>
    </li>
  );
}

export default DetailResultCardItem;
