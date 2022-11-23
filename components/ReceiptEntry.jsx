function ReceiptEntry(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.amount}</td>
    </tr>
  );
}

export default ReceiptEntry;
