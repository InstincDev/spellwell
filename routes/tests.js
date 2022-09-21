const express = require("express");
const router = express.Router();
const testController = require("../controllers/test");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Test Routes - simplified for now
router.get("/tests", ensureAuth, testController.getTest);

module.exports = router;