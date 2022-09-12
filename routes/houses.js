const express = require("express");
const router = express.Router();
const housesController = require("../controllers/houses");

// @desc    Show Person Page
// @route   GET /houses/person/:id
router.get("/person/:id", housesController.getPerson);

// @desc    Show Common Room Page
// @route   GET /houses/common_room/:house
router.get("/common_room/:house", housesController.getCommonRoom);

// @desc    Process add form
// @route   POST /houses
router.post("/", housesController.addPerson);

module.exports = router;
