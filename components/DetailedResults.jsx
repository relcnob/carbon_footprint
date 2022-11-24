import React from "react";
import styles from "../styles/DetailedResults.module.css";
import DetailResultCard from "./DetailResultCard";
function DetailedResults(props) {
  console.log(props);
  return (
    <section className={styles.detailCardList}>
      {props.facebook > 0 ? <DetailResultCard SoMeName="facebook" TotalCO2={props.facebook_carbon} /> : null}
      {props.twitter > 0 ? <DetailResultCard SoMeName="twitter" TotalCO2={props.twitter_carbon} /> : null}
      {props.instagram > 0 ? <DetailResultCard SoMeName="instagram" TotalCO2={props.instagram_carbon} /> : null}
      {props.tiktok > 0 ? <DetailResultCard SoMeName="tiktok" TotalCO2={props.tiktok_carbon} /> : null}
      {props.youtube > 0 ? <DetailResultCard SoMeName="youtube" TotalCO2={props.youtube_carbon} /> : null}
      {props.pinterest > 0 ? <DetailResultCard SoMeName="pinterest" TotalCO2={props.pinterest_carbon} /> : null}
      {props.twitch > 0 ? <DetailResultCard SoMeName="twitch" TotalCO2={props.twitch_carbon} /> : null}
      {props.reddit > 0 ? <DetailResultCard SoMeName="reddit" TotalCO2={props.reddit_carbon} /> : null}
      {props.linkedin > 0 ? <DetailResultCard SoMeName="linkedin" TotalCO2={props.linkedin_carbon} /> : null}
      {props.snapchat > 0 ? <DetailResultCard SoMeName="snapchat" TotalCO2={props.snapchat_carbon} /> : null}
      {props.whatsapp > 0 ? <DetailResultCard SoMeName="whatsapp" TotalCO2={props.whatsapp_carbon} /> : null}
      {props.tinder > 0 ? <DetailResultCard SoMeName="tinder" TotalCO2={props.tinder_carbon} /> : null}
    </section>
  );
}

export default DetailedResults;
