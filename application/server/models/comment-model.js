module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comments", {
    comment_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    number_of_comments: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Comment;
};
