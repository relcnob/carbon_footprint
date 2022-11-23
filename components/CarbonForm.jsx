import FormCard from "./FormCard";
import styles from "../modules/CarbonForm.module.css";
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
function CarbonForm() {
  return (
    <>
      <form
        action="/api/carbon-data/insert-data"
        method="POST"
        className={styles.carbonForm}
      >
        <h1>
          Choose social media platforms and adjust your time spent on them
          daily.
        </h1>
        <section>
          <FormCard name="facebook" image={facebook}></FormCard>
          <FormCard name="twitter" image={twitter}></FormCard>
          <FormCard name="instagram" image={instagram}></FormCard>
          <FormCard name="tiktok" image={tiktok}></FormCard>
          <FormCard name="youtube" image={youtube}></FormCard>
          <FormCard name="pinterest" image={pinterest}></FormCard>
          <FormCard name="twitch" image={twitch}></FormCard>
          <FormCard name="reddit" image={reddit}></FormCard>
          <FormCard name="linkedin" image={linkedin}></FormCard>
          <FormCard name="snapchat" image={snapchat}></FormCard>
          <FormCard name="whatsapp" image={whatsapp}></FormCard>
          <FormCard name="tinder" image={tinder}></FormCard>
        </section>

        <button>Check your footprint</button>
      </form>
    </>
  );
}

export default CarbonForm;
