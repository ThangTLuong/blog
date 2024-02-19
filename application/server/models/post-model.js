module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    post_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    original_post_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    date_time: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });

  return Post;
};
