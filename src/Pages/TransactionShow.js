import TransactionDetails from "../Components/TransactionDetails";

const TransactionShow = ({ deleteTransaction }) => {
  return (
    <section className="Show">
      <TransactionDetails deleteTransaction={deleteTransaction} />
    </section>
  );
};

export default TransactionShow;
