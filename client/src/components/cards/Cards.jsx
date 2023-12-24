import Card from "../card/Card.jsx";
import "./cards.css"

export default function Cards({ characters, onClose }) {
   // console.log(characters);
   //* props = { characters: [ --- ] }
   //* characters = [ {R}, {M}, {B}, {S} ]
   return (
      <div class = "cards">
         {
            characters.map(character => (
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={onClose}
               />
            ))
         }
      </div>
   );
}