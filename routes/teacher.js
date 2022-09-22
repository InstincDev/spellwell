const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const teacherController = require("../controllers/teacher");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Teacher Routes - simplified for now
// router.get("/signup", authController.getTeacherSignup);
// router.post("/signup", authController.postTeacherSignup);
// router.get("/profile", ensureAuth, userController.getProfile);
router.post("/create_test", ensureAuth, teacherController.createTest);
router.get("/add_test", ensureAuth, teacherController.getAddTestForm);

module.exports = router;