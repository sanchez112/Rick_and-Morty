export default function SearchBar({onSearch}) {
   console.log(onSearch)
   return (
      <div>
         <input type='search' />
         <button onClick={() => onSearch('mostrame esa cola pues, que nadie te la va a robar ')}>Agregar</button>
      </div>
   );
}
