const bcrypt = require("bcrypt");
const {
  models: { User },
} = require("../models");

const auth = require("../middleware/auth-login");

module.exports = {
  newUser: (req, res) => {
    const { username, email, password } = req.body;

    User.findOne({ where: { email }})
    .then((user) => {
      if (user) {
        res.sendStatus(409);
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
            res.sendStatus(201);
          })
          .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
          })
        }
      });
  },

  login: (req, res) => {
    auth(req, res);
  }
}