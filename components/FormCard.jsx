import { useState } from "react";
import facebook from "../public/facebook.svg";
import Image from "next/image";
import styles from "../modules/FormCard.module.css";

function FormCard(props) {
  const [TimeAmount, setTimeAmount] = useState(0);

  function timeHandler() {
    setTimeAmount(parseFloat(event.target.value));
  }
  function decreaseTime() {
    if (TimeAmount > 0) {
      setTimeAmount((oldTime) => (oldTime = oldTime - 0.5));
      console.log(TimeAmount);
    }
  }
  function increaseTime() {
    if (TimeAmount < 12) {
      setTimeAmount((oldTime) => (oldTime = oldTime + 0.5));
      console.log(TimeAmount);
    }
  }
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <section className={styles.formCard}>
      <p>{capitalize(props.name)}</p>
      <Image
        src={props.image}
        alt="facebook"
        width="100"
        height="100"
        title={props.name}
      ></Image>
      <label htmlFor={props.name}>{TimeAmount} h</label>
      <div>
        <span
          onClick={() => {
            decreaseTime();
          }}
        >
          <svg
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.899892 17.7418C0.62561 17.5731 0.397883 17.3296 0.239834 17.036C0.0817859 16.7425 -0.000955181 16.4093 1.27086e-05 16.0704L1.254e-05 1.9277C-0.00117082 1.58879 0.0813622 1.25558 0.239232 0.961903C0.397101 0.668228 0.624684 0.424548 0.89887 0.255609C1.17306 0.08667 1.48408 -0.00151127 1.80036 1.97595e-05C2.11663 0.00155079 2.4269 0.0927394 2.69965 0.264326L14.0981 7.32765C14.3723 7.49675 14.6 7.74028 14.7583 8.03371C14.9166 8.32714 15 8.66011 15 8.99906C15 9.33801 14.9166 9.67098 14.7583 9.96441C14.6 10.2578 14.3723 10.5014 14.0981 10.6705L2.69965 17.7338C2.42748 17.9067 2.11718 17.9986 1.80079 18C1.4844 18.0014 1.17339 17.9123 0.899892 17.7418Z"
              fill="#70F98E"
            />
          </svg>
        </span>
        <input
          type="range"
          onChange={timeHandler}
          min={0}
          max={12}
          step={0.5}
          value={TimeAmount}
          name={props.name}
          id={props.name}
        ></input>
        <span
          onClick={() => {
            increaseTime();
          }}
        >
          <svg
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.899892 17.7418C0.62561 17.5731 0.397883 17.3296 0.239834 17.036C0.0817859 16.7425 -0.000955181 16.4093 1.27086e-05 16.0704L1.254e-05 1.9277C-0.00117082 1.58879 0.0813622 1.25558 0.239232 0.961903C0.397101 0.668228 0.624684 0.424548 0.89887 0.255609C1.17306 0.08667 1.48408 -0.00151127 1.80036 1.97595e-05C2.11663 0.00155079 2.4269 0.0927394 2.69965 0.264326L14.0981 7.32765C14.3723 7.49675 14.6 7.74028 14.7583 8.03371C14.9166 8.32714 15 8.66011 15 8.99906C15 9.33801 14.9166 9.67098 14.7583 9.96441C14.6 10.2578 14.3723 10.5014 14.0981 10.6705L2.69965 17.7338C2.42748 17.9067 2.11718 17.9986 1.80079 18C1.4844 18.0014 1.17339 17.9123 0.899892 17.7418Z"
              fill="#70F98E"
            />
          </svg>
        </span>
      </div>
    </section>
  );
}

export default FormCard;
