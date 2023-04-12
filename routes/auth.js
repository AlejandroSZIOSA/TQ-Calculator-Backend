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
    .isEmail()
    .withMessage('Please enter a valid email') //TODO: problem in frontend App
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
    .trim() // eliminate empty spaces 
    .isLength({max: 20})
], authController.signup
);

//Login Authorization Users
router.post('/login',authController.login);

module.exports = router;