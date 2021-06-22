import TransactionNewForm from "../Components/TransactionNewForm"

const TransactionNew = ({ addTransaction }) => {
  return (
    <div className="TransactionNew">
      <h2>New</h2>
      <TransactionNewForm addTransaction={addTransaction} />
    </div>
  );
}

export default TransactionNew;
