import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import "./card.css"

export default function Card(props) {
   //* props = { id, name, status, ... } => character

   const dispatch = useDispatch(); //* Function({type, payload})
   const [isFav, setIsFav] = useState(false);
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(props.id));
      } else {
         setIsFav(true);
         dispatch(addFav(props));
      }
   }

   const myFavorites = useSelector(state => state.myFavorites);
   useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }, [myFavorites]);

   return (
      <div class = "card">
         <div class ="container-buttom">
            {
               isFav ? (
                  <button class= "fav"onClick={handleFavorite}>❤️</button>
               ) : (
                  <button class= "no-fav" onClick={handleFavorite}>🤍</button>
               )
            }
            <button class= "delte" onClick={() => props.onClose(props.id)}>X</button>
         </div>
         <div>
            <h2>{props.name}</h2>
            <h4>Id: {props.id}</h4>
            <h4>Status: {props.status}</h4>
            <h4>Specie: {props.species}</h4>
            <h4>Gender: {props.gender}</h4>
            {/* <h4>Origin: {props.origin}</h4> */}
         </div>

         <Link to={`/detail/${props.id}`} >
            <img class= "img-card" src={props.image} alt={props.name} />
         </Link>

      </div>
   );
}