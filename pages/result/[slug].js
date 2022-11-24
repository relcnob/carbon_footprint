import DetailedResults from "../../components/DetailedResults";
import ReceiptWrapper from "../../components/ReceiptWrapper";
import styles from "../../styles/Result.module.css";

// fetch serverside props

export default function Results(props) {
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.h1}>Your Results</h1>
        <ReceiptWrapper {...props} />
        <div className={styles.buttons}>
          <button className={styles.button}>Share to Facebook</button>
          <button className={styles.button}>Share to Instagram</button>
          <button className={styles.button}>Share to Twitter</button>
        </div>
      </section>

      <section>
        <h2 className={styles.h2}>Detailed Summary</h2>
        <DetailedResults {...props} />
      </section>

      <section>
        <h3 className={styles.h3}>Other users of this website</h3>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  require("dotenv").config();
  const slug = context.params.slug;
  const res = await fetch(`${process.env.URL_FETCH}/api/carbon-data/get-overall/${slug}`);
  const data = await res.json();
  return { props: data };
}
