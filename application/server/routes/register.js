const express = require("express");
const router = express.Router();
const { user } = require("../controller");

router.post("/", (req, res) => {
  user.newUser(req, res);
});

module.exports = router;