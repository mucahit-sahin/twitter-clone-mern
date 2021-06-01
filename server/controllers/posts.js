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
  } catch (error) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
};
const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
};
module.exports = { createPost, getAllPost, getUserPosts, getPost };
