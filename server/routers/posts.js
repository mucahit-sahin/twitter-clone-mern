const express = require("express");
const { check } = require("express-validator");
const {
  getAllPost,
  createPost,
  getUserPosts,
  getPost,
  likePost,
  unlikePost,
  addComment,
} = require("../controllers/posts");
const auth = require("../middlewares/auth");
const router = express.Router();

router.get("/", auth, getAllPost);
router.post(
  "/",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  createPost
);
router.get("/user/:user_id", auth, getUserPosts);
router.get("/:id", auth, getPost);
router.put("/like/:id", auth, likePost);
router.put("/unlike/:id", auth, unlikePost);
router.post("/:id", auth, addComment);

module.exports = router;
