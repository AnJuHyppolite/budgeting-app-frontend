import React from "react";
import axios from "axios";
import "./Transactions.css"

class Transactions extends React.Component {
  state = { transactions: [] };

  async componentDidMount() {
    const env = process.env.NODE_ENV;
    const url = env === "production" ? "" : "http://localhost:8888";
    const res = await axios.get(`${url}/transactions`);
    // debugger;
    this.setState({ transactions: res.data });
  }

  render() {
    const { transactions } = this.state;
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
}

export default Transactions;
