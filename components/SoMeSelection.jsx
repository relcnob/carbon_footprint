import React from "react";
import SoMeInput from "./SoMeInput.jsx";

function SoMeSelection() {
  return (
    <>
      <h2>Pick SoMe platforms and adjust the time spent on them</h2>
      <ul>
        <li>
          <SoMeInput />
        </li>
      </ul>
      <button>Check your footprint</button>
    </>
  );
}

export default SoMeSelection;
