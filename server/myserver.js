const http = require('http');
const url = require('url');
const path =  require('path');
const fs =  require('fs');

const myserver = http.createServer(handleResponse).listen(5002, 'http://127.0.0.1.');




function handleResponse( req, res) {

    console.log(arguments);
    console.log("listening...")
    res.writeHead(200, {'Content-Type':'text/html', 'Allow-Aceess-Control-Origin':'*'});
    res.write(`<h1>Hello this server is running...</h1>`);
    res.write(`<h1>Loading files...</h>`)
    res.end()

}

