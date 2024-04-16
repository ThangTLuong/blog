module.exports = (sequelize, Sequelize) => {
  const Media = sequelize.define("medias", {
    media_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    post_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    media: {
      type: Sequelize.BLOB("long"),
      allowNull: false,
    },
  });

  return Media;
};
