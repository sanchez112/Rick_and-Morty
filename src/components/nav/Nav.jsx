import SearchBar from "../SearchBar/SearchBar";

export default function Nav({onSearch}) {
    // console.log(onSearch)
    return (
       <div>
          <SearchBar onSearch={onSearch}/>
       </div>
    );
 }
 