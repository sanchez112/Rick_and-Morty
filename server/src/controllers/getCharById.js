const axios = require("axios");
const { response } = require("express");
const URL = "https://rickandmortyapi.com/api/character";
const API_KEY = "henrystaff";

const getCharById = (req, res )=>{
 const {id} = req.params
    axios
        .get(`${URL}/${id}`)
        .the(({data}) =>{
            const {
                id, status, name, species, origin, image, gender, location

            }= data;
            const character = {
                id, status, name, species, origin, image, gender, location
            };
            return character.name
            ?req.json(character)
            :req.status(404).send("Not fount")
        })
        .cat(error => {
            return res.status(500).send(error.message)
        });

 
}
module.exports = getCharById