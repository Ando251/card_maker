/*const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});*/

var http=require('http')
var fs=require('fs')

const port=8080

fs.readFile('one.html',function(error,one){
    fs.readFile('signup.html',function(error,signup){
    fs.readFile('log.html',function(error,log){
    server=http.createServer(function(req,res){
        if(req.url=='/'){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(one);
            res.end();
        }
        else if(req.url=='/signup'){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(signup);
            res.end();
        }
        else if(req.url=='/login'){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(log);
            res.end();
        }
        else
            res.end("404 not found");
    });
    server.listen(port);
});
});
});
