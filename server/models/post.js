const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { Schema, model } = mongoose;

const postSchema = new Schema({
  text: String,
  userId: {
    type: ObjectId,
    ref: "User",
  },
  username: String,
  fullname: String,
  date: {
    type: Date,
    default: Date.now,
  },
  likes: { type: [{ type: ObjectId, ref: "User" }], default: [] },
  comments: { type: [{ type: ObjectId, ref: "User" }], default: [] },
});

const Post = model("Post", postSchema);

module.exports = Post;
