const express = require("express");
const status = require("../../status");
const router = express.Router();

router.get("/", (req, res) => {
  status.Ok(req, res);
});

module.exports = router;
