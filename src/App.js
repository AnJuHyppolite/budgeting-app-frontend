import './App.css';
import { Route, Switch } from "react-router-dom"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import Transactions from "./Components/Transactions"
import TransactionsNew from "./Components/TransactionsNew"

function App() {
  return (
    <div className="App">
     <Route exact path="/" component={Home} />
     <Route path="/" component={NavBar} />
      <Switch>
     <Route path="/transactions/new" component={TransactionsNew} />
     <Route path="/transactions" component={Transactions} />
     </Switch>
    </div>
  );
}

export default App;
