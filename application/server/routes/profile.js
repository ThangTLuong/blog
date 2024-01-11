const express = require("express");
const router = express.Router();
const { isAuth } = require('../middleware/is-auth');

router.get("/", isAuth, (req, res) => {
  res.redirect(`/profile/${req.session.user_id}`);
});

module.exports = router;