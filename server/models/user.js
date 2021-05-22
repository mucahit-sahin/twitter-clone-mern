const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  fullName: String,
  username: String,
  email: String,
  password: String,
});

const User = model("User", userSchema);

module.exports = User;
