import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import "./Nav.css"


export default function Nav({logout,onSearch}) {

  return (
   <div class="navbar">

      <div class="user-actions">
         <button onClick={logout} class="logout-button">Logout x</button>
      </div>
      
      <div class="nav-links">
         <NavLink to="/about" class="nav-link">
            <button class="nav-button">About</button>
         </NavLink>
         <NavLink to="/home" class="nav-link">
            <button class="nav-button">Home</button>
         </NavLink>
         <NavLink to="/favorites" class="nav-link">
            <button class="nav-button">Favorites</button>
         </NavLink>
      </div>
      <div class="search-nav">
         <SearchBar onSearch={onSearch} />
      </div>
      
   </div>
  );
}