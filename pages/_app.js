import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
import "../styles/variables.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [Mode, setMode] = useState("");
  function setLightMode() {
    Mode == "light" ? setMode("") : setMode("light");
  }
  return (
    <>
      <div className={Mode} id="content_wrapper">
        <NavBar
          lightmode={() => {
            setLightMode();
          }}
        />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
