import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card.jsx";
import { filterCards, orderCards } from "../../redux/actions.js";
import "./favorites.css"


export default function Favorites({  onClose }) {
  
   const myFavorites = useSelector(state => state.myFavorites);
   const dispatch = useDispatch();
   const handleOrder = event =>{
      dispatch(orderCards(event.target.value));
   }
   const handleFilter = event =>{
      dispatch(filterCards(event.target.value));
   }
   return (
      <div class = "favorite">
         <div class = "order-filter">
            <select name="order" onChange={handleOrder}>
               <option value="A">Ascendente</option>
               <option value="D">Descendente</option>
            </select>
            <select name="filter" onChange={handleFilter}>
               <option value="All">All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>

         </div>
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


      </div>
   );
}