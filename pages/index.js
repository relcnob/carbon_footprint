import Head from "next/head";
import Image from "next/image";
import Form from "../components/Form";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Form />
    </>
  );
}
