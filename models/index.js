const { Sequelize, DataTypes, Model, QueryTypes, Op } = require("sequelize");
const sequelize = new Sequelize("coffee_db", "root", "Taodeobiet1!", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

// Connecting to MySQL Database
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectDB();

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.QueryTypes = QueryTypes;
db.Op = Op;

// Include Models

db.User = require("./userModel")(sequelize, DataTypes, Model);
db.Coffee = require("./coffeeModel")(sequelize, DataTypes, Model);
db.Bookmark = require("./bookmarkModel")(sequelize, DataTypes, Model);
db.Review = require("./reviewModel")(sequelize, DataTypes, Model);
db.CoffeeImage = require("./coffeeImageModel")(sequelize, DataTypes, Model);

// Define the relations between many models

db.Coffee.belongsTo(db.User, {
  foreignKey: "posted_user",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

db.Review.belongsTo(db.User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

db.Review.belongsTo(db.Coffee, {
  foreignKey: "coffee_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

db.Coffee.hasMany(db.Review, {
  foreignKey: "coffee_id",
});

db.User.hasMany(db.Review, {
  foreignKey: "user_id",
});

db.CoffeeImage.belongsTo(db.Coffee, {
  foreignKey: "coffee_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

db.Coffee.hasMany(db.CoffeeImage, {
  foreignKey: "coffee_id",
});

db.Bookmark.belongsTo(db.User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

db.Bookmark.belongsTo(db.Coffee, {
  foreignKey: "coffee_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

db.User.hasMany(db.Bookmark, {
  foreignKey: "user_id",
});

db.Coffee.hasMany(db.Bookmark, {
  foreignKey: "coffee_id",
});

// db.sequelize.sync();

module.exports = db;
