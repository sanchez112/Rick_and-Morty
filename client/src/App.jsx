
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

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} =  await axios(URL + `?email=${email}&password=${password}`);


         if(data.access){
            setAccess(data);
            access && navigate('/home');
         }else {
            alert ("credenciales incorrectas")
         }
      } catch (error) {
         alert(error.message)
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

   async function onSearch(id) {
      try {
         //* Verificar si existe character:
         const characterId = characters.filter(
            char => char.id === Number(id)
         )
         if(characterId.length) {
            return alert(`${characterId[0].name} ya existe!`)
         }

         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if (data.name) {
            setCharacters([...characters, data]);
            navigate("/home");
         } else {
            alert('¡El id debe ser un número entre 1 y 826!');
         }
      } catch (error) {
         alert("¡El id debe ser un número entre 1 y 826!");
      }
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