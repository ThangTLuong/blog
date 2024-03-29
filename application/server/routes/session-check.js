const express = require("express");
const isAuth = require("../middleware/is-auth");
const router = express.Router();

router.get("/", isAuth, (req, res) => {
  res.status(200).json( req.session.username );
});

module.exports = router;