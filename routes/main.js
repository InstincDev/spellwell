const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth');
const homeController = require('../controllers/home')
const {ensureAuth, ensureGuest} = require('../middleware/auth')

// @desc    Landing page
// @route   GET /
router.get( '/', homeController.getLandingPg)

// @desc    Add Person page
// @route   GET /add_person
router.get('/add_person', homeController.getAddPersonForm)

// @desc    Add Room page
// @route   GET /add_room
router.get('/add_room', homeController.getAddRoomForm)

module.exports = router