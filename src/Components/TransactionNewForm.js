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
    const { date, name, amount, from } = useState
    if (!date || !name || !from) {
      alert("Input is not valid. Please complete all the fields.")
    } else if (amount !== "number") {
      alert("The amount is not valid.")
    }
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
      <Link to={`/transactions`}><button>Go Back</button></Link>
    </form>
    </div>
  );
};

export default withRouter(TransactionNewForm);
