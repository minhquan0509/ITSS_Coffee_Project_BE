module.exports = (sequelize, DataTypes, Model) => {
  class Bookmark extends Model {}
  Bookmark.init(
    {
      // Model attributes are defined here
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      coffee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "Bookmark", // We need to choose the model name
      timestamps: true,
      freezeTableName: true,
    }
  );
  return Bookmark;
};
