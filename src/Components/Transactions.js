import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "./Transactions.css";

const Transactions = ({ transactions, sum }) => {

  return (
    <section className="TransactionsSection">
       <h1 className="TransactionsHeader"> Bank Account Total: ${sum}</h1>
      <ul className="TransactionsUL">
        {transactions.map((transaction, index) => {
          return (
            // <table>
            //   <tr>
            <li className="TransactionsLI" key={index}>
              {transaction.date}{" "}
              <Link to={`/transactions/${index}`}>{transaction.name}</Link>{" "}
              {transaction.amount}
            </li>
            // </tr>
            // </table>
          );
        })}
      </ul>
    </section>
  );
};

export default Transactions;
