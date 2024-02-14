const express = require("express");
const isAuth = require("../../middleware/is-auth");
const status = require("../../status");
const router = express.Router();

router.get("/", isAuth, (req, res) => {
  status.Ok(req, res, req.session);
});

router.post("/", isAuth, (req, res) => {});

module.exports = router;
