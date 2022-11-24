import Head from "next/head";
import Image from "next/image";
import CarbonForm from "../components/CarbonForm";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <CarbonForm />
    </>
  );
}
