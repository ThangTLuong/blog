const config = require("../config/db-config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT,
});

const db = {};

db.sequelize = sequelize;
db.models = {};

db.models.User = require("./user-model")(sequelize, Sequelize.DataTypes);
const User = db.models.User;

module.exports = db;