const express = require('express');
const {body} =  require('express-validator');

const User = require('../models/user');
const authController = require('../controllers/auth');

const router = express.Router();

//Validating Password
router.put(
  '/signup',
  [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .custom((value, {req}) => {
      return User.findOne({email: value})
        .then(userDoc => { 
          if(userDoc){
            return Promise.reject('Email already exists');
          }
      })
    })
    .normalizeEmail(),
  body('password')
    .trim()
    .isLength({min: 4})
], authController.signup
);

//Login Authorization Users
router.post('/login');


module.exports = router;