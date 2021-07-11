import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory, withRouter, Link } from "react-router-dom";
import "./TransactionDetails.css"

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
      <button id="DeleteButton" onClick={handleDelete}>Delete</button>
      {/* <Link id="GoBackDeetsButton" to={`/transactions`}>Go Back</Link> */}
      <Link id="GoBackDeetsButton" to={`/transactions`}><button className="GoBack">Go Back</button></Link>
    </div>
  );
};

export default withRouter(TransactionDetails);
