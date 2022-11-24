import styles from "../modules/Receipt.module.css";
import ReceiptEntry from "./ReceiptEntry";

function ReceiptWrapper() {
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
          <ReceiptEntry name="facebook" amount="123.45" />
        </tbody>
      </table>
      <span>****************************</span>
      <table>
        <tbody>
          <tr>
            <td>Total</td>
            {/* total should be calculated below */}
            <td>sum 12</td>
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
