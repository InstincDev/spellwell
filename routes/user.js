const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Test Routes - simplified for now
// router.get("/:id", ensureAuth, testsController.getTests);

// router.get("/add_test", userController.getAddTestForm);

// router.put("/likePost/:id", postsController.likePost);



module.exports = router;
