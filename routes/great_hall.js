const express = require('express')
const router = express.Router()
const great_hallController = require('../controllers/great_hall')

// @desc    Show All People
// @route   GET /
router.get('/', great_hallController.goToGreatHall)

module.exports = router