import FormCard from "./FormCard";

function CarbonForm() {
  return (
    <>
      <form
        style={{ maxWidth: "1440px", margin: "auto", padding: "1rem" }}
        action="/api/carbon-data/insert-data"
        method="POST"
        className=""
      >
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1rem",
          }}
        >
          <FormCard name="facebook"></FormCard>
          <FormCard name="twitter"></FormCard>
          <FormCard name="instagram"></FormCard>
          <FormCard name="tiktok"></FormCard>
          <FormCard name="youtube"></FormCard>
          <FormCard name="pinterest"></FormCard>
          <FormCard name="twitch"></FormCard>
          <FormCard name="reddit"></FormCard>
          <FormCard name="linkedin"></FormCard>
          <FormCard name="snapchat"></FormCard>
          <FormCard name="whatsapp"></FormCard>
          <FormCard name="tinder"></FormCard>
        </section>
        <br></br>
        <button> -- SUBMIT FORM -- </button>
      </form>
    </>
  );
}

export default CarbonForm;
