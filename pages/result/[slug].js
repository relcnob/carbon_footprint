import DetailedResults from "../../components/DetailedResults";
import { useState, useEffect } from "react";
// fetch serverside props

export default function Profile(props) {
  console.log(props);

  return (
    <>
      <section>
        <h1>Your Results</h1>
        {/* <Receipt /> */}´
      </section>
      <section>
        <h2>Detailed Summary</h2>
        <DetailedResults />
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
