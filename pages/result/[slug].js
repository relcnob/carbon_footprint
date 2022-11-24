import DetailedResults from "../../components/DetailedResults";
import { useState, useEffect } from "react";
import ReceiptWrapper from "../../components/ReceiptWrapper";
// fetch serverside props

export default function Results(props) {
  return (
    <>
      <section>
        <h1>Your Results</h1>
        <ReceiptWrapper {...props} />
      </section>
      <section>
        <h2>Detailed Summary</h2>
        <DetailedResults {...props} />
      </section>
      <section>
        <h3>Other users of this website</h3>
      </section>
    </>
  );
}
export async function getServerSideProps(context) {
  const slug = context.params.slug;
  const res = await fetch(`http://localhost:3000/api/carbon-data/get-overall/${slug}`);
  const data = await res.json();
  return { props: data };
}
