const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { check, validationResult } = require("express-validator");

const { login, authUser } = require("../controllers/users");

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get("/", auth, authUser);

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  login
);

module.exports = router;
