const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const userController = require("../controllers/user");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//User Routes - simplified for now
router.get("/profile", ensureAuth, userController.getProfile);

module.exports = router;