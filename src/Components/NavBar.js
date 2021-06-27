import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBarContainer">
      <NavLink to="/">Budget App</NavLink>
      <NavLink to="/transactions">Transactions</NavLink>
      <button className="TransactionButton">
        <NavLink to="/transactions/new">New Transaction</NavLink>
      </button>
    </nav>
  );
};

export default NavBar;
