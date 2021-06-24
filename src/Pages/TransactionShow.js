import TransactionDetails from "../Components/TransactionDetails";

const TransactionShow = ({ deleteTransaction }) => {
  return (
    <div className="Show">
      <section>
        <TransactionDetails
          deleteTransaction={deleteTransaction}
        />
      </section>
    </div>
  );
}

export default TransactionShow;