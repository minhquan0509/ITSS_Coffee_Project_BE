const {
  Coffee,
  CoffeeImage,
  User,
  Review,
  sequelize,
  QueryTypes,
  Op,
} = require("../models/index");

exports.createReview = async (req, res) => {
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

    const { review, rating } = req.body;
    if (review == null || rating == null) {
      //because rating could be 0
      return res.status(400).json({
        status: "fail",
        message: "The request does not contain full information",
      });
    }

    const newReview = await Review.create({
      user_id: currentUser.id,
      coffee_id: coffee.id,
      review,
      rating,
    });

    res.status(201).json({
      status: "success",
      data: {
        review: newReview,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getAllCoffeeReviews = async (req, res) => {
  try {
    const coffee = await Coffee.findOne({ where: { id: req.params.id } });
    if (!coffee) {
      return res.status(404).json({
        status: "fail",
        message: "This coffee does not exist with that ID !",
      });
    }

    return res.status(200).json({
      status: "success",
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
