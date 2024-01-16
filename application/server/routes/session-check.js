const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { username, authorized } = req.session;

  if (!(authorized || username)) res.sendStatus(401);

  res.status(200).json({ username });
});

module.exports = router;