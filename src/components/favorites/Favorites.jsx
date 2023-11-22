import { useSelector } from "react-redux";
import Card from "../card/Card.jsx";


export default function Favorites({  onClose }) {
   // console.log(characters);
   //* props = { characters: [ --- ] }
   //* characters = [ {R}, {M}, {B}, {S} ]
   const myFavorites = useSelector(state => state.myFavorites);
   return (
      <div
         style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly"
         }}
      >
         {
            myFavorites.map(favorite => (
               <Card
                  key={favorite.id}
                  id={favorite.id}
                  name={favorite.name}
                  status={favorite.status}
                  species={favorite.species}
                  gender={favorite.gender}
                  origin={favorite.origin.name}
                  image={favorite.image}
                  onClose={onClose}
               />
            ))
         }
      </div>
   );
}