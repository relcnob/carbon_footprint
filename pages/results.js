import DetailedResults from "../components/DetailedResults";
import Form from "../components/Form";
import Hero from "../components/Hero";

export default function Results() {
  return (
    <>
      <section>
        <h1>Your Results</h1>
        {/* <Receipt /> */}
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
