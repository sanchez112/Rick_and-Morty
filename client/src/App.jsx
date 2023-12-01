
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import axios from "axios";
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import NotFound from './components/notfound/NotFound.jsx';
import Form from './components/form/Form.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions.js';

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";


function App() {
   //*login
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '123456';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }else{
         alert("Credenciales incorrect")
      }
   }
   function logout(){
      setAccess(false)
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   const location = useLocation();

   function onSearch(id) {
      const characterId = characters.filter(
         char => char.id === Number(id)
      )
      if(characterId.length) {
         //* [ {name:Rick, id:1, .... } ]
         return alert(`${characterId[0].name} ya existe!`)
      }
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(
            ({ data }) => {
               if (data.name) {
                  // console.log(data)
                  setCharacters([...characters, data]);
               } else {
                  window.alert('¡El id debe ser un número entre 1 y 826!');
               }
            });
      navigate("/home");
   }

   const dispatch = useDispatch();
   const onClose = id => {
      setCharacters(characters.filter(char => char.id !== Number(id)));
      dispatch(removeFav(id));

   }

   return (
      <div className='App'>
         {
            location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />
         }
         
         <Routes>
            <Route 
            path="/"
            element={<Form login={login}/>}

            />
            <Route 
               path="/home"
               element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route
               path="/about"
               element={<About />}
            />
            <Route
               path="/detail/:id"
               element={<Detail />}
            />
            <Route
               path="/favorites"
               element={<Favorites onClose={onClose}/>}
            />
            <Route
               path="*"
               element={<NotFound />}
            />
            
         </Routes>
         <hr />
      </div>
   );
}

export default App;