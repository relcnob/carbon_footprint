import React from "react";
import styles from "../styles/DetailedResults.module.css";
import DetailResultCard from "./DetailResultCard";
function DetailedResults(props) {
  console.log(props);
  return (
    <section className={styles.detailCardList}>
      <DetailResultCard SoMeName="facebook" TotalCO2={props.facebook_carbon} />
      <DetailResultCard SoMeName="twitter" TotalCO2={props.twitter_carbon} />
      <DetailResultCard SoMeName="instagram" TotalCO2={props.instagram_carbon} />
      <DetailResultCard SoMeName="tiktok" TotalCO2={props.tiktok_carbon} />
      <DetailResultCard SoMeName="youtube" TotalCO2={props.youtube_carbon} />
      <DetailResultCard SoMeName="pinterest" TotalCO2={props.pinterest_carbon} />
      <DetailResultCard SoMeName="twitch" TotalCO2={props.twitch_carbon} />
      <DetailResultCard SoMeName="reddit" TotalCO2={props.reddit_carbon} />
      <DetailResultCard SoMeName="linkedin" TotalCO2={props.linkedin_carbon} />
      <DetailResultCard SoMeName="snapchat" TotalCO2={props.snapchat_carbon} />
      <DetailResultCard SoMeName="whatsapp" TotalCO2={props.whatsapp_carbon} />
      <DetailResultCard SoMeName="tinder" TotalCO2={props.tinder_carbon} />
    </section>
  );
}

export default DetailedResults;
