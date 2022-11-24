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
      </section>
      <section className={styles.section}>
        <h2 className={styles.h2}>Detailed Summary</h2>
        <DetailedResults {...props} />
      </section>
      <section className={styles.section}>
        <h3 className={styles.h3}>Other users of this website</h3>
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
