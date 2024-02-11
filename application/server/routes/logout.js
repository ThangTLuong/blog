const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/is-auth');
const status = require('../status');

router.get('/', isAuth, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log('An error has occurred while logging out')
    }
  });

  res.clearCookie("connect.sid");
  status.Ok(req, res);
});

module.exports = router;