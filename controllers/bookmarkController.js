const {
  Coffee,
  CoffeeImage,
  User,
  sequelize,
  QueryTypes,
  Op,
  Review,
  Bookmark,
} = require("../models/index");

exports.createBookmark = async (req, res) => {
  try {
    const coffee = await Coffee.findOne({ where: { id: req.params.id } });
    const currentUser = req.user;

    if (!coffee || !currentUser) {
      return res.status(404).json({
        status: "fail",
        message:
          "This coffee does not exist with that ID or user not login yet !",
      });
    }

    const [row, created] = await Bookmark.findOrCreate({
      where: { user_id: currentUser.id, coffee_id: coffee.id },
      default: { user_id: currentUser.id, coffee_id: coffee.id },
    });

    res.status(201).json({
      status: "success",
      data: {
        bookmark: created,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.deleteBookmark = async (req, res) => {
  try {
    const coffee = await Coffee.findOne({ where: { id: req.params.id } });
    const currentUser = req.user;

    if (!coffee || !currentUser) {
      return res.status(404).json({
        status: "fail",
        message:
          "This coffee does not exist with that ID or user not login yet !",
      });
    }

    const bookmark = await Bookmark.findOne({
      where: { user_id: currentUser.id, coffee_id: coffee.id },
    });

    if (bookmark) {
      await bookmark.destroy();
    }

    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
