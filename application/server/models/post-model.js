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
    number_of_likes: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    number_of_comments: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    number_of_reposts: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return Post;
};
