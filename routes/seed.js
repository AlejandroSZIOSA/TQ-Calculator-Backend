const express = require('express');

const seedsController = require('../controllers/seed')

const router = express.Router();

//passing a function as second argument
// GET /seeds/
router.get('/seeds', seedsController.getSeeds);

module.exports = router;

