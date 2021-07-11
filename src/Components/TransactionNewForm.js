import { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import "./TransactionNewForm.css";

const TransactionNewForm = ({ addTransaction, history }) => {
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
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
    console.log(value)
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
        required
      />
      <label htmlFor="name">Name</label>
      <input
        onChange={handleChange}
        id="name"
        name="name"
        value={transaction.name}
        placeholder="Name"
        required
      />
      <label htmlFor="amount">Amount</label>
      <input
        onChange={handleChange}
        type="number"
        id="amount"
        name="amount"
        value={transaction.amount}
        placeholder="Amount"
        required
      />
      <label htmlFor="from">From</label>
      <input
        onChange={handleChange}
        id="from"
        name="from"
        value={transaction.from}
        placeholder="From"
        required
      />
      <button id="CreateNewButton">Create New Item</button>
      <Link id="GoBackNewForm" to={`/transactions`}><button>Go Back</button></Link>
    </form>
    </div>
  );
};

export default withRouter(TransactionNewForm);
