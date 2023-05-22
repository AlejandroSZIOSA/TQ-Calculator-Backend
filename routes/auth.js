const express = require('express');

const {body} =  require('express-validator');

const User = require('../models/user');

const authController = require('../controllers/auth');

const router = express.Router();

//Create new Users + Validating Password
router.put(
  '/signup',
  [
  body('email')
    .isEmail() //Control email format
    .withMessage('Please enter a valid email')
    .custom((value, {req}) => {
      return User.findOne({email: value})
        .then(userDoc => { 
          if(userDoc){
            return Promise.reject('Email already exists');
          }
      })
    }),
    //.normalizeEmail(), // fix Frontend problem!
  body('password')
    .trim() // Eliminate empty spaces
    .isLength({max: 20}) //Set max password length
], authController.signup
);

//Login Auth Users
router.post('/login',authController.login);

module.exports = router;