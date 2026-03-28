const express = require('express');

const {body} =  require('express-validator');

const seedController = require('../controllers/seed')

const isAuth = require('../middleware/isAuth')

const router = express.Router();

//Passing a function as second argument
router.get('/seeds',isAuth,seedController.getSeeds); //Validation isAuth

//Warning: Comment this out! If you want create new seeds(products) using Postman.
/*
router.post('/seed',
  [
    body('name')
      .trim() // Eliminate white spaces
      .isLength({max:15}),
  ], 
  seedController.createSeed
);
*/

module.exports = router;

