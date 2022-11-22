import React from "react";
import FormCard from "./FormCard";
import style from "../styles/Form.module.css";
function Form() {
  return (
    <div className="container">
      <h2 className={style.h2}>Pick SoMe Platforms and adjust the time spent on them this week</h2>
      <div className={style.formGrid}>
        <FormCard />
        <FormCard />
        <FormCard />
        <FormCard />
        <FormCard />
        <FormCard />
        <FormCard />
        <FormCard />
        <FormCard />
        <FormCard />
        <FormCard />
        <FormCard />
      </div>
      <button>Check your footprint</button>
    </div>
  );
}

export default Form;
