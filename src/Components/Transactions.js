import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "./Transactions.css";

// import { apiURL } from "../util/apiURL"
// const API = apiURL()

const Transactions = ({ transactions }) => {
  // async componentDidMount() {
  // const env = process.env.NODE_ENV;
  // const url = env === "production" ? "http://anjus-budget-app.netlify.app" : "http://localhost:8888";
  // const res = await axios.get(`${url}/transactions`);
  // debugger;
  // this.setState({ transactions: res.data });
  // }

let sum = 0;
transactions.forEach((transaction) => {
  sum += transaction.amount
  return Number(sum)
})
  return (
    <section className="TransactionsSection">
       <h1 className="TransactionsHeader"> Bank Account Total: {Number(sum)}</h1>
      <ul className="TransactionsUL">
        {transactions.map((transaction, index) => {
          return (
            <li className="TransactionsLI" key={index}>
              {transaction.date}{" "}
              <Link to={`/transactions/${index}`}>{transaction.name}</Link>{" "}
              {transaction.amount}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Transactions;
