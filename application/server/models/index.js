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
db.models.Post = require("./post-model")(sequelize, Sequelize.DataTypes);
db.models.Text = require("./text-model")(sequelize, Sequelize.DataTypes);
db.models.Media = require("./media-model")(sequelize, Sequelize.DataTypes);

db.models.UserPost = require("./user-post-model")(
  sequelize,
  Sequelize.DataTypes
);
db.models.PostText = require("./post-text-model")(
  sequelize,
  Sequelize.DataTypes
);
db.models.PostMedia = require("./post-media-model")(
  sequelize,
  Sequelize.DataTypes
);

const User = db.models.User;
const Post = db.models.Post;
const Text = db.models.Text;
const Media = db.models.Media;

// User one to many Post
User.hasMany(Post, {
  foreignKey: "user_id",
});
Post.belongsTo(User, {
  foreignKey: "user_id",
});
Post.belongsTo(Post, {
  foreignKey: "original_post_id",
  as: "originalPost",
});

// Post one to one Text
Post.hasOne(Text, {
  foreignKey: "post_id",
});
Text.belongsTo(Post, {
  foreignKey: "post_id",
});

// Post one to many Media
Post.hasMany(Media, {
  foreignKey: "post_id",
});
Media.belongsTo(Post, {
  foreignKey: "post_id",
});

module.exports = db;