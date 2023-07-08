module.exports = (sequelize, DataTypes, Model) => {
  class CoffeeImage extends Model {}
  CoffeeImage.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      coffee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "CoffeeImage", // We need to choose the model name
      timestamps: false,
    }
  );
  return CoffeeImage;
};
