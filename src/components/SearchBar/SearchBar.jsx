
export default function SearchBar({onSearch}) {
   // console.log(onSearch)
   return (
      <div>
         <input type='search' />
         <button onClick={() => onSearch('Id:1')}>Agregar</button>
      </div>
   );
}
