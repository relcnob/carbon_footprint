import React from "react";
import styles from "../styles/DetailResultCard.module.css";
import Image from "next/image";
import DetailResultCardItem from "./DetailResultCardItem";
import facebook from "../public/facebook.svg";
import car from "../public/car.svg";
import airplane from "../public/airplane.svg";
import beef from "../public/beef.svg";
import banana from "../public/banana.svg";
import water from "../public/water.svg";
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
        <DetailResultCardItem TotalCO2={props.TotalCO2} type={"car"} svg={car} conversion="5.21" unit="km" action="driven in a " />
        <DetailResultCardItem TotalCO2={props.TotalCO2} type={"airplane"} svg={airplane} conversion="3.92" unit="km" action="per passenger on a" />
        <DetailResultCardItem TotalCO2={props.TotalCO2} type={"beef"} svg={beef} conversion="0.01" unit="kg" action="of" />
        <DetailResultCardItem TotalCO2={props.TotalCO2} type={"water"} svg={water} conversion="0.01" unit="ml" action="of" />
        <DetailResultCardItem TotalCO2={props.TotalCO2} type={"bananas"} svg={banana} conversion="1.11" unit="kg" action="of" />
      </ul>
    </article>
  );
}

export default DetailResultCard;
