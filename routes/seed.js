const express = require('express');

const {body} =  require('express-validator');

const seedController = require('../controllers/seed')

const router = express.Router();

//passing a function as second argument
// GET /seed/seeds
router.get('/seeds', seedController.getSeeds);

// post and validation length of seeds
router.post('/seed',
  [
    body('name')
      .trim()
      .isLength({max:5}),
  ], 
  seedController.createSeed
);

module.exports = router;

