require("dotenv").config(); // Calling environment variables

const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const seedRoutes = require("./routes/seed");

const authRoutes = require("./routes/auth");

const cors = require("cors"); //For Cross-Origin Resource Sharing

const app = express();

app.use(cors()); // Allow all origins by default
// or configure specific origins:
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend's origin
    credentials: true, // if using cookies
  })
);

app.use(bodyParser.json()); //Parse data from incoming requests

//Define End-Points
app.use("/seed", seedRoutes); //Initiating the seed routes

app.use("/auth", authRoutes); //Initiating the auth routes

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data; //Adding data to the error object
  res.status(status).json({ message: message, data: data });
});

//Mongoose
mongoose
  .connect(process.env.DB_KEY) //ENV key!
  .then((result) => {
    app.listen(8081);
  })
  .catch((err) => console.log(err));
