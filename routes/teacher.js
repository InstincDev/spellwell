const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacher");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Teacher Routes - simplified for now
router.post("/create_test", ensureAuth, teacherController.createTest);
router.get("/add_test", ensureAuth, teacherController.getAddTestForm);

module.exports = router;