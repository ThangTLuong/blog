const bcrypt = require("bcrypt");
const {
  models: { User },
} = require("../models");

const loginValidation = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } })
    .then((user) => {
      if(!user) res.sendStatus(401);
    

      bcrypt.compare(password, user.password, (err, result) => {
        if(!result) res.sendStatus(401);

        req.session.user_id = user.user_id;
        req.session.username = user.username;
        req.session.authorized = true;
        res.sendStatus(200);
      })

    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err);
    })
}

module.exports = loginValidation;