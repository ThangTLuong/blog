const express = require("express");
const router = express.Router();
const { user } = require("../../controller");
const status = require("../../status");

router.get("/", (req, res) => {
  status.Ok(req, res);
});

router.post("/", (req, res) => {
  user.login(req, res);
});

module.exports = router;
