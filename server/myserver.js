const http = require('http');
const url = require('url');
const path =  require('path');
const fs =  require('fs');
const assert = require('assert');
const PORT= 3000

const myserver = http.createServer(handleResponse).listen(PORT);



function handleResponse( req, res) {

    console.log(arguments);
    console.log("listening...")
    res.writeHead(200, {'Content-Type':'text/html', 'Allow-Aceess-Control-Origin':'*'});
    fs.readFile('./dist/index.html', (err,data)=>{
   if(err){res.write("there was an error")}
   res.write(data)

    res.end()
    })

}

