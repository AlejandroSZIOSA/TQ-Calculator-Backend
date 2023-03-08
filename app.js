const express = require('express');//import

const bodyParser = require('body-parser'); //import

const mongoose = require('mongoose'); //import

const seedRoutes = require('./routes/seed'); //import


const app = express();

app.use(bodyParser.json()); //Parse data from incoming requests

//Fixing CORDS problem in the browser
app.use((req, res, next) => {
  res.setHeader('Access-Control-allow-origin' , '*');
  res.setHeader('Access-Control-allow-methods', 'GET,POST,PUT,DELETE,PATCH');
  res.setHeader('Access-Control-allow-headers', 'Content-Type,Authorization');
  next();//continue
})

//Passing a path and the functionality
//this is an Express expression
app.use('/seed',seedRoutes); //Initiating the seed routes

//mongoose
mongoose.connect() //key!
.then( result =>{
  app.listen(8080);
}).catch(err => console.log(err));

//initiating the server

