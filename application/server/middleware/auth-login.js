const bcrypt = require("bcrypt");
const {
  models: { User },
} = require("../models");

const status = require('../status');

const loginValidation = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } })
    .then((user) => {
      if(!user) return status.Unauthorized(req, res);

      bcrypt.compare(password, user.password, (err, result) => {
        if(!result) return status.Unauthorized(req, res);

        req.session.user_id = user.user_id;
        req.session.username = user.username;
        req.session.authorized = true;
        return status.Ok(req, res);
      });
    })
    .catch((err) => {
      status.InternalServerError(req, res, err.message);
    });
}

module.exports = loginValidation;