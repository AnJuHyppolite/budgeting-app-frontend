import React from "react";
import { withRouter } from "react-router-dom";
import "./TransactionsNew.css";

class TransactionsNew extends React.Component {
  state = { date: "", itemName: "", amount: "", from: "" };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value });
  };

  render() {
    const { date, itemName, amount, from } = this.state;
    return (
      <form className="TransactionsForm" onSubmit={this.handleSubmit}>
        <h1 className="TransactionsHeader">Add a New Item</h1>
        <label htmlFor="date">Date</label>
        <input
          onChange={this.handleChange}
          id="date"
          name="date"
          value={date}
          placeholder="Date"
        />
        <label htmlFor="itemName">Item</label>
        <input
          onChange={this.handleChange}
          id="itemName"
          name="itemName"
          value={itemName}
          placeholder="Name"
        />
        <label htmlFor="amount">Amount</label>
        <input
          onChange={this.handleChange}
          type="number"
          id="amount"
          name="amount"
          value={amount}
          placeholder="Amount"
        />
        <label htmlFor="from">From</label>
        <input
          onChange={this.handleChange}
          id="from"
          name="from"
          value={from}
          placeholder="From"
        />
        <button>Create New Item</button>
      </form>
    );
  }
}

export default withRouter(TransactionsNew);
