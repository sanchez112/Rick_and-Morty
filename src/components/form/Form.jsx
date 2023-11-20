import React, { useState } from 'react'
import validation from '../utils/validation';
const banner = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png";

export default function Form({login}) {
    const [userData, setUserData] = useState({
        email:"",
        password: ""
    });
    const[errors, setErrors] = useState({
        email:"Ingrese su email",
        password: "Ingrese su password"
    });
   const handleChange = (event) =>{
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
        setErrors(validation({
            ...userData,
            [name]: value

        }));
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }



  return (
    <div>
        <form>
            <img src = {banner}
            style={{width: "300px"}} alt="New" />

            <label >Email: </label>
            <input type="text"
            key="email"
            name="email"
            value={userData.email}
            placeholder='Ingresa email...'
            onChange={handleChange}
            />
            <p  style={{color:"coral"}}>
                {errors.email? errors.email:null}
            </p>
            
            <label >Password: </label>
            <input type="password" 
             key="password"
             name="password"
             value={userData.password}
             placeholder='Ingresa password...'
             onChange={handleChange}
            />
            <p style={{color:"coral"}}>
                {errors.password? errors.password:null}
            </p>
            <hr />
            <button
            type='submit'
            onClick={ handleSubmit}
            disabled={errors.email || errors.password}>Submit</button>
           
        </form>
    </div>
  )
}
