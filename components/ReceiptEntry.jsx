function ReceiptEntry(props) {
  return (
    <tr>
      <td>
        {props.hours} x {props.name}
      </td>
      <td>{props.amount.toFixed(2)}</td>
    </tr>
  );
}

export default ReceiptEntry;
