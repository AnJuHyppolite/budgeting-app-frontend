import TransactionDetails from "../Components/TransactionDetails";

const TransactionShow = ({ deleteTransaction }) => {
  return (
    <div className="Show">
      <h2>Show</h2>
      <section>
        <TransactionDetails
          deleteTransaction={deleteTransaction}
        />
      </section>
    </div>
  );
}

export default TransactionShow;