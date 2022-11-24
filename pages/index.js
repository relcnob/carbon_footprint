import Head from "next/head";
import Image from "next/image";
import CarbonForm from "../components/CarbonForm";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <>
      <Hero />
      <CarbonForm message={null} />
    </>
  );
}

// export async function getServerSideProps({ req, res }) {
//   if (req.method === "POST") {
//     return {
//       props: {
//         message: "Please add the time you spend on at least one of the Social Medias.",
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// }
// props.message ? props.message : null
