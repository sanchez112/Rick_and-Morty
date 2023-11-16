import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import axios from "axios"
// import characters from './data.js';
// https://rym2.up.railway.app/api/character/10?key=henrystaff
const URL ="https://rym2.up.railway.app/api/character"
const API_KeY ="henrystaff"


function App() {

   const [characters, setCharacters] = useState([]);
   
   function onSearch(id) {
      axios(`${URL}/${id}?key=${API_KeY}`).then(
         ({ data }) => {
             if (data.name) {
               console.log(data)
                  setCharacters([...characters, data]);
             } else {
                  window.alert('¡No hay personajes con este ID!');
             }
          }
      );
   }
   return (
      <div className='App'>
         
         <Nav onSearch={(onSearch) } />
         <hr />
         <Cards characters={characters} />
      </div>
   );
}

export default App;