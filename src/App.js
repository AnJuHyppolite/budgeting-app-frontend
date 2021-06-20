import './App.css';
import { Route } from "react-router-dom"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import Transactions from "./Components/Transactions"

function App() {
  return (
    <div className="App">
     <Route exact path="/" component={Home} />
     <Route path="/" component={NavBar} />
     <Route path="/transactions" component={Transactions} />
    </div>
  );
}

export default App;
