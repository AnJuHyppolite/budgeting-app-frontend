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
      // debugger;
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
      <h2>Gimme the Deets</h2>
      <p>{transaction.from}</p>
      <p>{transaction.name}</p>
      <p>{transaction.date}</p>
      <p>{transaction.amount}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default withRouter(TransactionDetails);
