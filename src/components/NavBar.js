import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
          to="/"
          className="nav-link"
        >
          Home
        </NavLink>

        <NavLink
          to="/songs"
          className="nav-link"
        >
          Songs
        </NavLink>

        <NavLink
          to="/about"
          className="nav-link"
        >
          About
        </NavLink>

    </nav>
    );
};

export default NavBar;
