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
import { useRef } from "react";

function CarbonForm() {
  const ref = useRef(null);
  const handleFormArrow = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <form
        action="/api/carbon-data/insert-data"
        method="POST"
        className={styles.carbonForm}
      >
        <div>
          <h1>
            Choose social media platforms and adjust your time spent on them
            daily.
          </h1>
          <svg
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleFormArrow}
          >
            <path
              d="M0.899892 17.7418C0.62561 17.5731 0.397883 17.3296 0.239834 17.036C0.0817859 16.7425 -0.000955181 16.4093 1.27086e-05 16.0704L1.254e-05 1.9277C-0.00117082 1.58879 0.0813622 1.25558 0.239232 0.961903C0.397101 0.668228 0.624684 0.424548 0.89887 0.255609C1.17306 0.08667 1.48408 -0.00151127 1.80036 1.97595e-05C2.11663 0.00155079 2.4269 0.0927394 2.69965 0.264326L14.0981 7.32765C14.3723 7.49675 14.6 7.74028 14.7583 8.03371C14.9166 8.32714 15 8.66011 15 8.99906C15 9.33801 14.9166 9.67098 14.7583 9.96441C14.6 10.2578 14.3723 10.5014 14.0981 10.6705L2.69965 17.7338C2.42748 17.9067 2.11718 17.9986 1.80079 18C1.4844 18.0014 1.17339 17.9123 0.899892 17.7418Z"
              fill="#70F98E"
            />
          </svg>
        </div>
        <section ref={ref}>
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
