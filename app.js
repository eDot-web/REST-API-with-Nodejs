//Q: Create a personal website using full-stack development which uses a REST API to tell system date and time by an API call. The website should work on the localhost.

//Date And Time: NO DATABASES REQUIRED FOR SUCH SMALL CONTENT

//Importing Modules
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

//Setting up app--express()
var app = express();


//"The website should work on the localhost."
const port = 3000;


app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());


// REST API: get method (http method)
app.get('/time',(req,res)=>{
    let now = new Date(Date.now()).toLocaleString();
    res.json(now);
});

app.listen(port,()=>{
    console.log(`Server Started at port: ${port}`);
});