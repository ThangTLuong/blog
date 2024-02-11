module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comments", {
    comment_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
  });

  return Comment;
};
