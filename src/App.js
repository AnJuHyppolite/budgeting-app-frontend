// DEPENDENCIES
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// COMPONENTS
import NavBar from "./Components/NavBar";

//PAGES
// import './App.css';
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import TransactionNew from "./Pages/TransactionNew";
import TransactionEdit from "./Pages/TransactionEdit";
import TransactionShow from "./Pages/TransactionShow";

import { apiURL } from "./util/apiURL";
const API = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransaction = async () => {
    try {
      const res = await axios.get(`${API}/transactions`);
      setTransactions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  const addTransaction = async (newTransaction) => {
    try {
      const res = await axios.post(`${API}/transactions`, newTransaction);
      setTransactions((prevTransactions) => [...prevTransactions, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTransaction = async (updatedTransaction, index) => {
    try {
      await axios.put(`${API}/transactions/${index}`, updatedTransaction);
      const newTransactions = [...transactions];
      newTransactions[index] = updatedTransaction;
      setTransactions(newTransactions);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTransaction = async (index) => {
    try {
      await axios.delete(`${API}/transactions/${index}`);
      const oldTransactions = [...transactions];
      oldTransactions.splice(index, 1);
      setTransactions(oldTransactions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/transactions/new">
              <TransactionNew addTransaction={addTransaction} />
            </Route>
            <Route exact path="/transactions">
              <Index transactions={transactions} />
            </Route>
            <Route exact path="/transactions/:index">
              <TransactionShow deleteTransaction={deleteTransaction} />
            </Route>
            <Route path="/transactions/:index/edit">
              <TransactionEdit updateTransaction={updateTransaction} />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
