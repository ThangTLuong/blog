const express = require("express");
const router = express.Router();
const { user } = require("../controller");

router.post("/", (req, res) => {
  user.login(req, res);
})

module.exports = router;