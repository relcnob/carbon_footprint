import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
import "../styles/variables.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
