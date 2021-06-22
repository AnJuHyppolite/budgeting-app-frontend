import TransactionNewForm from "../Components/TransactionNewForm"

const TransactionNew = ({ addTransaction, history }) => {
  return (
    <div className="TransactionNew">
      <h2>New</h2>
      <TransactionNewForm history={history} addTransaction={addTransaction} />
    </div>
  );
}

export default TransactionNew;
