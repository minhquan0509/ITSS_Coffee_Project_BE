module.exports = (sequelize, DataTypes, Model) => {
  class User extends Model {}
  User.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      gmail: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      role: {
        type: DataTypes.ENUM,
        values: ["admin", "user"],
        defaultValue: "user",
        allowNull: false,
      },
      avatar: {
        type: DataTypes.STRING(255),
      },
      nationality: {
        type: DataTypes.STRING(255),
        allowNull: false, // japanese or vietnamese or american
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "User", // We need to choose the model name
      timestamps: false,
      freezeTableName: true,
    }
  );
  return User;
};
