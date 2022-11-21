import FormCard from "../components/FormCard";

function test_page() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, minmax(220px, 1fr))",
        maxWidth: "1440px",
        margin: "auto",
      }}
    >
      <FormCard></FormCard>
    </section>
  );
}

export default test_page;
