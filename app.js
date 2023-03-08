const express = require('express');

//importing routes
const seedRoutes = require('./routes/seed')

const app = express();

//Passing a path and the functionality
//this is an Express expression
app.use('/seed',seedRoutes);

app.listen(8080);

