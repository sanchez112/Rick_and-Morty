import React from "react";
import "./searchBar.css"

export default function SearchBar(props) {

   const [id, setId] = React.useState(""); //* [ Estado, manejador]
   const handleChange = event => {
      const {value} = event.target;
      // console.log(value);
      setId(value);
   }

   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }
   //* Traer Character Random
   const handleRandom = () => {
		const randomNumber = Math.floor(Math.random() * 826) + 1;
		props.onSearch(randomNumber);
	};
   
   return (
      <div class="SearchBar">
         <input
            type="text"
            name="search"
            id="search"
            onChange={handleChange}
            value={id}
         />
         <button class="Agregar" onClick={handleClick}>Agregar</button>
         
         <button class="Random" onClick={handleRandom}>Random</button>
      </div>
   );
}