const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { register } = require("../controllers/users");

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  "/",
  [
    check("fullname", "Name is required").notEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "username",
      "Please enter a username with 3 or more characters"
    ).isLength({ min: 3 }),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  register
);

module.exports = router;
