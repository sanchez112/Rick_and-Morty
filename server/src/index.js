const express = require('express');
const getCharById = require('./controllers/getCharById');
const server = express();
const PORT = 3001;
server.get("/rickandmorty/character/:id", getCharById)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});