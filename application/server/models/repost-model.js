module.exports = (sequelize, Sequelize) => {
  const Repost = sequelize.define("reposts", {
    repost_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
  });

  return Repost;
};
