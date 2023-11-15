import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
// import characters from './data.js';


function App() {
   const [characters, setCharacters] = useState([]);
   const example = {
         id: 1,
         name: 'Rick Sanchez',
         status: 'Alive',
         species: 'Human',
         gender: 'Male',
         origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
         },
         image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      }; 
   const onSearch = () => {
      setCharacters([...characters, example]);
      
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