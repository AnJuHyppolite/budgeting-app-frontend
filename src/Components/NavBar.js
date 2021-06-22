import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBarContainer">
      <h1 className="BudgetAppLink">
        <NavLink to="/">Budget App</NavLink>
      </h1>
      <h1 className="TransactionsLink">
        <NavLink to="/transactions">Transactions</NavLink>
      </h1>
      <button className="TransactionButton">
          <h1>
        <NavLink to="/transactions/new">New Transaction</NavLink></h1>
      </button>
    </nav>
  );
};

export default NavBar;
