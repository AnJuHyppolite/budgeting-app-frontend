import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory, withRouter, Link } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const TransactionDetails = ({ deleteTransaction }) => {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();
  let history = useHistory();
  
  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await axios.get(`${API}/transactions/${index}`);
        setTransaction(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransaction();
  }, [index]);

  const handleDelete = () => {
    deleteTransaction(index);
    history.push("/transactions");
  };

  return (
    <div className="TransactionDeets">
      <h2>Giving You the Deets</h2>
      <p>From: {transaction.from}</p>
      <p>Name: {transaction.name}</p>
      <p>Date: {transaction.date}</p>
      <p>Amount: ${transaction.amount}</p>
      <button onClick={handleDelete}>Delete</button>
      <Link id="GoBackButton" to={`/transactions`}><button>Go Back</button></Link>
    </div>
  );
};

export default withRouter(TransactionDetails);
