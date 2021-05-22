const express = require("express");
const { login, register } = require("../controllers/users");

const router = express.Router();

router.get("/api/login", () => {
  console.log("get get");
});
router.post("/api/login", login);
router.post("/api/signup", register);

module.exports = router;
