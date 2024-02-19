module.exports = (sequelize, Sequelize) => {
  const Repost = sequelize.define("reposts", {
    repost_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    number_of_reposts: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Repost;
};
