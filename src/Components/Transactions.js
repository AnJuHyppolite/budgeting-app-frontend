import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "./Transactions.css";

const Transactions = ({ transactions, sum }) => {
  return (
    <section className="TransactionsSection">
      <h1 className="TransactionsHeader"> Bank Account Total: ${sum}</h1>
      {/* <ul className="TransactionsUL">
        {transactions.map((transaction, index) => {
          return (
            <li className="TransactionsLI" key={index}>
              {transaction.date}{" "}
              <Link to={`/transactions/${index}`}>{transaction.name}</Link>{" "}
              {transaction.amount}
            </li>
          );
        })}
      </ul> */}
      <table className="BankTransactionsTable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Transaction</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            return (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>
                  <Link className="TransactionLink" to={`/transactions/${index}`}>{transaction.name}</Link>
                </td>
                <td>{transaction.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Transactions;
