import React from "react";
import axios from "axios";
import { useState, useEffect } from "react"
import "./Transactions.css"

import { apiURL } from "../util/apiURL"
const API = apiURL()

function Transactions () {
  const [transactions, setTransactions] = useState([])
 
  const fetchTransaction = async () => {
    try {
      const res = await axios.get(`${API}/transactions`);
      setTransactions(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect (() => {
    fetchTransaction()
  }, [])

  // async componentDidMount() {
    // const env = process.env.NODE_ENV;
    // const url = env === "production" ? "http://anjus-budget-app.netlify.app" : "http://localhost:8888";
    // const res = await axios.get(`${url}/transactions`);
    // debugger;
    // this.setState({ transactions: res.data });
  // }
  
    return (
      <section className="TransactionsSection">
        <h1 className="TransactionsHeader">Bank Account Total:</h1>
        <ul className="TransactionsUL">
         {transactions.map((transaction) => {
             return <li className="TransactionsLI">{transaction.date} <a href="">{transaction.name}</a> {transaction.amount}</li>
         })}
        </ul>
      </section>
    );
  }


export default Transactions;
