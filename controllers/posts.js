const { validationResult } = require("express-validator");
const Post = require("../models/post");
const User = require("../models/user");

const createPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findById(req.user.id).select("-password");
    const newPost = new Post({
      text: req.body.text,
      username: user.username,
      fullname: user.fullname,
      userId: req.user.id,
    });

    const post = await newPost.save();

    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.user_id });
    if (!posts) {
      return res.status(404).json({ msg: "Posts not found" });
    }
    res.json(posts);
  } catch (errd) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
};
const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check for ObjectId format and post
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
};

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.likes.filter((like) => like.user.toString() == req.user.id) > 0) {
      return res.status(400).json({ msg: "Post already liked" });
    }
    post.likes.unshift({ user: req.user.id });
    await post.save();
    return res.json(post.likes);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
};
const unlikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (
      post.likes.filter((like) => like.user.toString() == req.user.id) === 0
    ) {
      return res.status(400).json({ msg: "Post has not yet been liked" });
    }

    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();
    return res.json(post.likes);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
};
const addComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const user = await User.findById(req.user.id).select("-password");
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    post.comments.unshift({
      user: req.user.id,
      username: user.username,
      fullname: user.fullname,
      text: req.body.comment,
    });
    await post.save();
    return res.json(post.comments);
  } catch (error) {
    console.error(error.message);

    res.status(500).send("Server Error");
  }
};
module.exports = {
  createPost,
  getAllPost,
  getUserPosts,
  getPost,
  likePost,
  unlikePost,
  addComment,
};
