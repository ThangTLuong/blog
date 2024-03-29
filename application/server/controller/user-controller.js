const bcrypt = require("bcrypt");
const {
  uniqueNamesGenerator,
  NumberDictionary,
} = require("unique-names-generator");
const {
  models: { User },
} = require("../models");

const auth = require("../middleware/auth-login");
const status = require("../status");

module.exports = {
  newUser: (req, res) => {
    const numberDictionary = NumberDictionary.generate({ min: 1, max: 999 });
    const { username, email, password } = req.body;

    const generateUserHandle = () => {
      const userHandle = uniqueNamesGenerator({
        dictionaries: [[username], numberDictionary],
        separator: "",
        style: "capital",
      });

      return User.findAll({ where: { user_handle: userHandle } }).then(
        (users) => {
          if (users.length > 0) {
            return generateUserHandle();
          }
          return userHandle;
        }
      );
    };

    User.findOne({ where: { email } }).then((user) => {
      if (user) {
        status.Conflict(req, res);
      } else {
        generateUserHandle().then((userHandle) => {
          bcrypt
            .genSalt(10)
            .then((salt) => bcrypt.hash(password, salt))
            .then((hashedPassword) => {
              return User.create({
                user_handle: userHandle,
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
            });
        });
      }
    });
  },

  login: (req, res) => {
    auth(req, res);
  },
};