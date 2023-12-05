const http = require("http");
const PORT = 3001
const charaters = require("./utils/data");
const getCharById = require("./controllers/getCharById");

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split("/").pop();
        getCharById(res,id);
    }
        
        
        
})
.listen(PORT, "127.0.0.1", () => (console.log(`server listenig on port ${PORT}`)))