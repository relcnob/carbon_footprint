function ReceiptEntry(props) {
  return (
    <tr>
      <td>
        {props.hours} x {props.name}
      </td>
      <td>{props.amount}</td>
    </tr>
  );
}

export default ReceiptEntry;
