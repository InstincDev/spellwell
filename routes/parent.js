const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const parentController = require("../controllers/parent");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Parent Routes - simplified for now
router.get("/signup", authController.getParentSignup);
router.post("/signup", authController.postParentSignup);
router.get("/profile", ensureAuth, parentController.getParentProfile);

module.exports = router;