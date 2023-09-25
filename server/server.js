let express = require('express');
let app = express();
let port = 3000;
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
require('dotenv').config();


//Set the front end path
const frontEnd = path.join(__dirname, '..', 'client', 'dist');


app.use(express.static(frontEnd));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());





app.get('/*', function(req, res){
    res.sendFile(frontEnd + "/index.html");
})



app.listen(port, ()=>{
    console.log("App started on port " + port);
})