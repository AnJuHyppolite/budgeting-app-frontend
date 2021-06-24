import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const TransactionDetails = ({ deleteTransaction }) => {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();
  let history = useHistory();

  const fetchTransaction = async () => {
    try {
      const res = await axios.get(`${API}/transactions/${index}`);
      setTransaction(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransaction();
  });

  const handleDelete = () => {
    deleteTransaction(index);
    history.push("/transactions");
  };

  return (
    <div>
      <h2>Giving You the Deets</h2>
      <p>From: {transaction.from}</p>
      <p>Name: {transaction.name}</p>
      <p>Date: {transaction.date}</p>
      <p>Amount: ${transaction.amount}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default withRouter(TransactionDetails);
