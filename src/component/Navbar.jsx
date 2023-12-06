import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

import "../component/Navbar.css";
import SearchBar from "./SearchBar";


export default function Navbar() {
  const { color } = useTheme()
  return (
    <div className="navbar" style={{background: color}}>
      <nav>
        <NavLink to="/" className="brand">
          <h1>Foodie...</h1>
        </NavLink>
        <SearchBar />
        <NavLink to="/create">
          <h1>Create Recipe</h1>
        </NavLink>
      </nav>
    </div>
  );
}
