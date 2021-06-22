import { useState } from "react";
import { withRouter } from "react-router-dom";
import "./TransactionNewForm.css";

const TransactionsNewForm = ({ addTransaction, history }) => {
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
    const { name, value } = e.target;
    setTransaction({ [name]: value });
  };

  return (
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
      <label htmlFor="itemName">Item</label>
      <input
        onChange={handleChange}
        id="itemName"
        name="itemName"
        value={transaction.itemName}
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
  );
};

export default withRouter(TransactionsNewForm);
