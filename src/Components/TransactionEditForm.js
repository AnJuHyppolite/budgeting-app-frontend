import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { apiURL } from '../util/apiURL';
const API = apiURL();

const TransactionEditForm = (props) => {
  let { index } = useParams();
  let history = useHistory();

  const [transaction, setTransaction] = useState({
    date: "",
    itemName: "",
    amount: 0,
    from: "",
  });

  const handleChange = (e) => {
      const { id, value } = e.target
    setTransaction({ ...transaction, [id]: value });
  };

  const fetchTransaction = async () => {
    try {
      const res = await axios.get(`${API}/transactions/${index}`);
      setTransaction(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTransaction();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { updateTransaction } = props
    await updateTransaction(transaction, index);
    history.push(`/transactions/${index}`);
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
      {/* <button>Create New Item</button>
      <button></button> */}
    </form>
    </div>
  );
}


export default TransactionEditForm;
