import Random_botton from "../Random botton/Random_botton";
import SearchBar from "../searchbar/SearchBar";

export default function Nav(props) {

  return (
     <div
     style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
   }}
     >
        <SearchBar onSearch={props.onSearch} />
        <Random_botton/>
     </div>
  );
}