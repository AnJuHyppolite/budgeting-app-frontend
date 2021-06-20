import { NavLink } from "react-router-dom"


const NavBar = () => {
    return(
        <div>
        <NavLink to="/">Budget App</NavLink>
        <NavLink to="/transactions">Transactions</NavLink>
        </div>
    )
}

export default NavBar