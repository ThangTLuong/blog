const express = require("express");
const router = express.Router();
const status = require("../../status");
const isAuth = require("../../middleware/is-auth");

router.get("/", isAuth, (req, res) => {
  status.Ok(req, res, req.session);
});

module.exports = router;
