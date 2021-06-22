import { useState } from "react";
import { withRouter } from "react-router-dom";
import "./TransactionNewForm.css";

const TransactionNewForm = ({ addTransaction, history }) => {
  const [transaction, setTransaction] = useState({
    date: "",
    itemName: "",
    amount: "",
    from: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(transaction)
    history.push("/transactions")
  };

 const handleChange = (e) => {
    const { id, value } = e.target;
    setTransaction({ ...transaction, [id]: value });
  };

  return (
    <div>
    <form className="TransactionsForm" onSubmit={handleSubmit}>
      <h1 className="TransactionsHeader">Add a New Item</h1>
      <label htmlFor="date">Date</label>
      <input
        onChange={handleChange}
        id="date"
        name="date"
        value={transaction.date}
        placeholder="Date"
      />
      <label htmlFor="name">Name</label>
      <input
        onChange={handleChange}
        id="name"
        name="name"
        value={transaction.name}
        placeholder="Name"
      />
      <label htmlFor="amount">Amount</label>
      <input
        onChange={handleChange}
        type="number"
        id="amount"
        name="amount"
        value={transaction.amount}
        placeholder="Amount"
      />
      <label htmlFor="from">From</label>
      <input
        onChange={handleChange}
        id="from"
        name="from"
        value={transaction.from}
        placeholder="From"
      />
      <button>Create New Item</button>
    </form>
    </div>
  );
};

export default withRouter(TransactionNewForm);
