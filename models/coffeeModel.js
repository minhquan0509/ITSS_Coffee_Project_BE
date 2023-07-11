module.exports = (sequelize, DataTypes, Model) => {
  class Coffee extends Model {}
  Coffee.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      contactNumber: {
        type: DataTypes.STRING(10),
        validate: {
          isNumeric: true,
          len: 10,
        },
      },
      average_rating: {
        type: DataTypes.FLOAT,
        defaultValue: null,
      },
      open_hour: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      close_hour: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      air_conditioner: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      posted_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_approved: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      is_crowded: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "Coffee", // We need to choose the model name
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Coffee;
};
