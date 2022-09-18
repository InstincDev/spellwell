const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const testsController = require("../controllers/tests");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Test Routes - simplified for now
router.get("/:id", ensureAuth, testsController.getTests);

router.post("/createPost", upload.single("file"), postsController.createPost);

router.put("/likePost/:id", postsController.likePost);



module.exports = router;
