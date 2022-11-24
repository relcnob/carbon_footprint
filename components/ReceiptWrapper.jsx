import styles from "../modules/Receipt.module.css";
import ReceiptEntry from "./ReceiptEntry";

function ReceiptWrapper(props) {
  return (
    <section className={styles.receiptWrapper}>
      <div className={styles.receiptOverlay}></div>
      <h2>SoMe/carbon</h2>
      <span>****************************</span>
      <h2>CARBON FOOTPRINT RECEIPT</h2>
      <span>****************************</span>

      <table>
        <tbody>
          <tr>
            <th>SoMe platform</th>
            <th>g of CO2</th>
          </tr>
          {/* ENTRIES GO HERE props: 'name" and "amount" see example below */}
          <ReceiptEntry hours={props.tiktok} name="tiktok" amount={props.tiktok_carbon} />
          <ReceiptEntry hours={props.facebook} name="facebook" amount={props.facebook_carbon} />
          <ReceiptEntry hours={props.twitter} name="twitter" amount={props.twitter_carbon} />
          <ReceiptEntry hours={props.instagram} name="instagram" amount={props.instagram_carbon} />
          <ReceiptEntry hours={props.tiktok} name="tiktok" amount={props.tiktok_carbon} />
          <ReceiptEntry hours={props.youtube} name="youtube" amount={props.youtube_carbon} />
          <ReceiptEntry hours={props.pinterest} name="pinterest" amount={props.pinterest_carbon} />
          <ReceiptEntry hours={props.twitch} name="twitch" amount={props.twitch_carbon} />
          <ReceiptEntry hours={props.reddit} name="reddit" amount={props.reddit_carbon} />
          <ReceiptEntry hours={props.linkedin} name="linkedin" amount={props.linkedin_carbon} />
          <ReceiptEntry hours={props.snapchat} name="snapchat" amount={props.snapchat_carbon} />
          <ReceiptEntry hours={props.whatsapp} name="whatsapp" amount={props.whatsapp_carbon} />
          <ReceiptEntry hours={props.tinder} name="tinder" amount={props.tinder_carbon} />
        </tbody>
      </table>
      <span>****************************</span>
      <table>
        <tbody>
          <tr>
            <td>Total</td>
            {/* total should be calculated below */}
            <td>{props.total_emissions_per_day}</td>
          </tr>
          <tr>
            <td>Unit</td>
            <td>g of CO2</td>
          </tr>
        </tbody>
      </table>

      <span>****************************</span>
      <h2>Thank you for testing your digital carbon footprint</h2>
      <span>****************************</span>
      <div className={styles.barcode}></div>
      {/* UUID goes below */}
      <p>935a4628-5b4b-4378-ac6a-88a4b6508664</p>
    </section>
  );
}

export default ReceiptWrapper;
