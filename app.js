const express = require('express');//import

const bodyParser = require('body-parser'); //import

const seedRoutes = require('./routes/seed') //import

const app = express();

app.use(bodyParser.json()); //Parse data from incoming requests

//Passing a path and the functionality
//this is an Express expression
app.use('/seed',seedRoutes); //Initiating the seed routes

app.listen(8080);//initiating the server

