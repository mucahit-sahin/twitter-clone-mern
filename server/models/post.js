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
  likes: [
    {
      user: {
        type: ObjectId,
        ref: "users",
      },
    },
  ],
  comments: [
    {
      user: {
        type: ObjectId,
        ref: "users",
      },
      text: {
        type: String,
        required: true,
      },
      username: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Post = model("Post", postSchema);

module.exports = Post;
