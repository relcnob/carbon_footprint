function ReceiptEntry(props) {
  return (
    <tr>
      <td>
        {props.name} x {props.hours}
      </td>
      <td>{props.amount.toFixed(2)}</td>
    </tr>
  );
}

export default ReceiptEntry;
