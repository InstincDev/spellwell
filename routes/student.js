const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const studentController = require("../controllers/student");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//User Routes - simplified for now
router.get("/signup", authController.getStudentSignup);
router.post("/signup", authController.postStudentSignup);
router.get("/profile", ensureAuth, studentController.getStudentProfile);

module.exports = router;