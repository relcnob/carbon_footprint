import React from "react";
import styles from "../styles/DetailResultCard.module.css";
import facebook from "../public/facebook.svg";
import car from "../public/car.svg";
import airplane from "../public/airplane.svg";
import beef from "../public/beef.svg";
import banana from "../public/banana.svg";
import water from "../public/water.svg";
import Image from "next/image";
/* import DetailResultCardItem from "./DetailResultCardItem"; */
/* Math.round(2); */
function DetailResultCard(props) {
  return (
    <article className={styles.article}>
      <header>
        <Image src={facebook} alt="facebook" width="50" height="50"></Image>

        <h3>{props.SoMeName}</h3>
        <div className={styles.totalCO2}>
          {props.TotalCO2} CO<sup>2</sup>
        </div>
      </header>
      <ul className={styles.ul}>
        {/*  <DetailResultCardItem t ype={car} CarData="2" />
        <DetailResultCardItem type={airplane} />
        <DetailResultCardItem type={beef} />
        <DetailResultCardItem type={water} />
        <DetailResultCardItem type={banana} /> */}
        <li className={styles.li}>
          <Image src={car} alt="car icon" width="auto" height="20"></Image>

          <div className={styles.line}></div>

          <p className={styles.p}>Equal to {props.TotalCO2 * 5.21} km driven in a car</p>
        </li>
        <li className={styles.li}>
          <Image src={airplane} alt="airplane icon" width="auto" height="20"></Image>

          <div className={styles.line}></div>

          <p className={styles.p}>Equal to {props.TotalCO2 * 3.92} km flight per passenger</p>
        </li>
        <li className={styles.li}>
          <Image src={beef} alt="beef icon" width="auto" height="20"></Image>

          <div className={styles.line}></div>

          <p className={styles.p}>Equal to {props.TotalCO2 * 0.01} kg of beef</p>
        </li>
        <li className={styles.li}>
          <Image src={water} alt="water icon" width="auto" height="20"></Image>

          <div className={styles.line}></div>

          <p className={styles.p}>Equal to {props.TotalCO2 * 0.01} l of water</p>
        </li>
        <li className={styles.li}>
          <Image src={banana} alt="banana icon" width="auto" height="20"></Image>

          <div className={styles.line}></div>

          <p className={styles.p}>Equal to {props.TotalCO2 * 1.11} kg of bananas</p>
        </li>
      </ul>
    </article>
  );
}

export default DetailResultCard;
