const bcrypt = require("bcrypt");
const {
  models: { User },
} = require("../models");

const auth = require("../middleware/auth-login");
const status = require("../status");

module.exports = {
  newUser: (req, res) => {
    const { username, email, password } = req.body;

    User.findOne({ where: { email }})
    .then((user) => {
      if (user) {
        status.Conflict(req, res);
      } else {
        bcrypt
          .genSalt(10)
          .then((salt) => bcrypt.hash(password, salt))
          .then((hashedPassword) => {
            return User.create({
              username,
              email,
              password: hashedPassword,
            });
          })
          .then(() => {
            status.Created(req, res);
          })
          .catch((err) => {
            status.InternalServerError(req, res, err.message);
          })
        }
      });
  },

  login: (req, res) => {
    auth(req, res);
  }
}