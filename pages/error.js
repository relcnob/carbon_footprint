import ErrorMsg from "../components/ErrorMsg.jsx";
function error() {
  return (
    <section
      style={{
        display: "flex",
        flexFlow: "column",
        margin: "auto",
        justifyContent: "center",
        alignContent: "center",
        height: "80vh",
        width: "100vw",
      }}
    >
      <ErrorMsg />
    </section>
  );
}

export default error;
