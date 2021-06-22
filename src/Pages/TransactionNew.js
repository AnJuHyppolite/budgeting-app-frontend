import TransactionNewForm from "../Components/TransactionNewForm"

const TransactionNew = ({ addTransaction, history }) => {
  return (
    <div className="TransactionNew">
      <TransactionNewForm history={history} addTransaction={addTransaction} />
    </div>
  );
}

export default TransactionNew;
