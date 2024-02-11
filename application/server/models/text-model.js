module.exports = (sequelize, Sequelize) => {
  const Text = sequelize.define("texts", {
    text_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    post_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Text;
};
