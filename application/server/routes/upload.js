const express = require('express');
const isAuth = require("../middleware/is-auth");
const router = express.Router();

router.get('/', isAuth, (req, res) => {
  res.sendStatus(200);
})

module.exports = router;