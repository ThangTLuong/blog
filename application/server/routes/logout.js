const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.log('An error has occurred while logging out')
    }
  });

  res.clearCookie("connect.sid");
  res.sendStatus(200);
});

module.exports = router;