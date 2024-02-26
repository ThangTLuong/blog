module.exports = (sequelize, Sequelize) => {
  const Like = sequelize.define("likes", {
    like_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
  });

  return Like;
};
