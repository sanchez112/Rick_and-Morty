import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

export default function Nav({logout,onSearch}) {

  return (
     <div>
         <NavLink to="/favorites">
            <button>favorites</button>
         </NavLink>
         <NavLink to="/home">
            <button>Home</button>
         </NavLink>
         <NavLink to="/about">
            <button>About</button>
         </NavLink>
         
         <button onClick={logout}>Logout x</button>
         

         <hr />
        <SearchBar onSearch={onSearch} />
     </div>
  );
}