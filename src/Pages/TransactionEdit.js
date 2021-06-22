import TransactionEditForm from "../Components/TransactionEditForm";

const TransactionEdit = ({ updateTransaction }) => {
  return (
    <div className="New Edit">
      <h2>Edit</h2>
      <TransactionEditForm updateTransaction={updateTransaction} />
    </div>
  );
}

export default TransactionEdit;
