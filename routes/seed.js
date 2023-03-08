const express = require('express');

const seedController = require('../controllers/seed')

const router = express.Router();

//passing a function as second argument
// GET /seed/seeds
router.get('/seeds', seedController.getSeeds);

router.post('/seed', seedController.createSeed);

module.exports = router;

