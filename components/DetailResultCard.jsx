import React from "react";
import styles from "../styles/DetailResultCard.module.css";
import facebook from "../public/facebook.svg";
import twitter from "../public/twitter.svg";
import instagram from "../public/instagram.svg";
import tiktok from "../public/tiktok.svg";
import youtube from "../public/youtube.svg";
import pinterest from "../public/pinterest.svg";
import twitch from "../public/twitch.svg";
import reddit from "../public/reddit.svg";
import linkedin from "../public/linkedin.svg";
import snapchat from "../public/snapchat.svg";
import whatsapp from "../public/whatsapp.svg";
import tinder from "../public/tinder.svg";
import car from "../public/car.svg";
import airplane from "../public/airplane.svg";
import beef from "../public/beef.svg";
import banana from "../public/banana.svg";
import water from "../public/water.svg";
import Image from "next/image";
/* import DetailResultCardItem from "./DetailResultCardItem"; */
/* Math.round(2); */

function DetailResultCard(props) {
  let SoMeIcon;
  if (props.SoMeName === "facebook") {
    SoMeIcon = facebook;
  } else if (props.SoMeName === "twitter") {
    SoMeIcon = twitter;
  } else if (props.SoMeName === "instagram") {
    SoMeIcon = instagram;
  } else if (props.SoMeName === "reddit") {
    SoMeIcon = reddit;
  } else if (props.SoMeName === "youtube") {
    SoMeIcon = youtube;
  } else if (props.SoMeName === "pinterest") {
    SoMeIcon = pinterest;
  } else if (props.SoMeName === "linkedin") {
    SoMeIcon = linkedin;
  } else if (props.SoMeName === "whatsapp") {
    SoMeIcon = whatsapp;
  } else if (props.SoMeName === "tinder") {
    SoMeIcon = tinder;
  } else if (props.SoMeName === "snapchat") {
    SoMeIcon = snapchat;
  } else if (props.SoMeName === "tiktok") {
    SoMeIcon = tiktok;
  } else if (props.SoMeName === "twitch") {
    SoMeIcon = twitch;
  }

  return (
    <article className={styles.article}>
      <header>
        <Image src={SoMeIcon} alt="facebook" width="50" height="50" className={styles.img}></Image>

        <h3>{props.SoMeName}</h3>
        <div className={styles.totalCO2}>
          {(props.TotalCO2 * 1).toFixed(2)}g CO<sup>2</sup>
        </div>
      </header>
      <ul className={styles.ul}>
        {/*  <DetailResultCardItem type={car} CarData="2" />
        <DetailResultCardItem type={airplane} />
        <DetailResultCardItem type={beef} />
        <DetailResultCardItem type={water} />
        <DetailResultCardItem type={banana} /> */}
        <li className={styles.li}>
          <Image src={car} alt="car icon" width="auto" height="20" className={styles.img}></Image>

          <div className={styles.line}></div>

          <p className={styles.p}>Equal to {(props.TotalCO2 * 0.0052083).toFixed(2)} km driven in a car</p>
        </li>
        <li className={styles.li}>
          <Image src={airplane} alt="airplane icon" width="auto" height="20" className={styles.img}></Image>

          <div className={styles.line}></div>

          <p className={styles.p}>Equal to {(props.TotalCO2 * 0.003921568627).toFixed(2)} km flight per passenger</p>
        </li>
        <li className={styles.li}>
          <Image src={beef} alt="beef icon" width="auto" height="20" className={styles.img}></Image>

          <div className={styles.line}></div>

          <p className={styles.p}>Equal to {(props.TotalCO2 * 0.01005227181).toFixed(2)} g of beef</p>
        </li>
        <li className={styles.li}>
          <Image src={water} alt="water icon" width="auto" height="20" className={styles.img}></Image>

          <div className={styles.line}></div>

          <p className={styles.p}>Equal to {(props.TotalCO2 * 0.09433962264).toFixed(2)} l of water</p>
        </li>
        <li className={styles.li}>
          <Image src={banana} alt="banana icon" width="auto" height="20" className={styles.img}></Image>

          <div className={styles.line}></div>

          <p className={styles.p}>Equal to {(props.TotalCO2 * 1.1627906977).toFixed(2)} g of bananas</p>
        </li>
      </ul>
    </article>
  );
}

export default DetailResultCard;
