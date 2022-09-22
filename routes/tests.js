const express = require("express");
const router = express.Router();
const testController = require("../controllers/tests");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Test Routes - simplified for now
router.get("/test/:id", ensureAuth, testController.getTest);

router.post("/test/:id", ensureAuth, testController.getTestResults);


module.exports = router;