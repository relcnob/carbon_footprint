import { useState } from "react";
import facebook from "../public/facebook.svg";
import Image from "next/image";

function FormCard() {
  const [TimeAmount, setTimeAmount] = useState(0);

  function timeHandler() {
    setTimeAmount(parseInt(event.target.value));
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

  return (
    <section className="formCard">
      <Image src={facebook} alt="facebook" width="100" height="100"></Image>
      <p>{TimeAmount}</p>
      <div>
        <span
          onClick={() => {
            decreaseTime();
          }}
        ></span>
        <input
          type="range"
          onChange={timeHandler}
          min={0}
          max={12}
          step={0.5}
          value={TimeAmount}
          className="custom-slider"
        ></input>
        <span
          onClick={() => {
            increaseTime();
          }}
        ></span>
      </div>
    </section>
  );
}

export default FormCard;
