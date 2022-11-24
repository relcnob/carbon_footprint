import DetailedResults from "../../components/DetailedResults";
import ReceiptWrapper from "../../components/ReceiptWrapper";
import styles from "../../styles/Result.module.css";
import { createClient } from "@supabase/supabase-js";
import { getOverall } from "../../utils/helper";
import UserRank from "../../components/UserRank";
// require("dotenv").config();
// import dotenv from "dotenv";

// fetch serverside props

export default function Results(props) {
  return (
    <>
      {/* Hello */}
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
        <UserRank {...props} />
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const supabaseUrl = "https://xcckwxdaaemmncjylmpi.supabase.co";
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const slug = context.params.slug;
  const { data, error } = await supabase
    .from(process.env.TABLE_NAME)
    .select("*");
  if (!error) {
    return {
      props: {
        ...getOverall(data, slug),
      },
    };
  } else {
    return { notFound: true };
  }
}
