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

const { isEmptyObject } = require("../utils/checkEmptyObject");
const { queryFilterObject } = require("../utils/queryFilterObject");

exports.getAllCoffees = async (req, res) => {
  try {
    if (isEmptyObject(req.query)) {
      const coffees = await Coffee.findAll({
        where: {
          is_approved: true,
        },
        include: [{ model: CoffeeImage }],
      });
      // console.log(coffees);
      return res.status(200).json({
        status: "success",
        results: coffees.length,
        data: {
          coffees,
        },
      });
    } else {
      const queryStringObject = { ...req.query };
      const filterObject = queryFilterObject(queryStringObject, Op);

      const coffees = await Coffee.findAll({
        where: {
          is_approved: true,
          ...filterObject,
        },
        include: { model: CoffeeImage },
      });

      return res.status(200).json({
        status: "success",
        results: coffees.length,
        data: {
          coffees,
        },
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: "Get all coffees fail...",
    });
  }
};

exports.createCoffee = async (req, res) => {
  try {
    const { images } = req.body;

    const newCoffee = await Coffee.create({
      ...req.body,
      posted_user: req.user.id,
    });

    // Insert the images of room into the database

    if (images.length != 0) {
      images.forEach(async (image) => {
        await CoffeeImage.create({
          coffee_id: newCoffee.id,
          image,
        });
      });
    }

    return res.status(201).json({
      status: "success",
      data: {
        coffee: newCoffee,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      error: error.errors[0].message,
    });
  }
};

exports.getCoffee = async (req, res) => {
  try {
    const coffee = await Coffee.findOne({
      where: { id: req.params.id },
      include: [
        CoffeeImage,
        {
          model: Review,
          include: [{ model: User, attributes: ["id", "name"] }],
        },
      ],
    });
    if (!coffee) {
      return res.status(404).json({
        status: "fail",
        message: "This coffee does not exist with that ID !",
      });
    }

    return res.status(200).json({
      status: "success",
      data: {
        coffee,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.updateCoffee = async (req, res) => {
  try {
    const coffee = await Coffee.findOne({ where: { id: req.params.id } });
    if (!coffee) {
      return res.status(404).json({
        status: "fail",
        message: "No room found with that ID",
      });
    }

    if (coffee.posted_user == req.user.id || req.user.role == "admin") {
      await coffee.update({ ...req.body });
      return res.status(200).json({
        status: "success",
        data: {
          coffee,
        },
      });
    }

    return res.status(400).json({
      status: "fail",
      message: "Can not update coffee because the user is not owner or admin",
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      error: error.errors[0].message,
    });
  }
};

exports.deleteCoffee = async (req, res) => {
  try {
    const coffee = await Coffee.findOne({ where: { id: req.params.id } });
    if (!coffee) {
      return res.status(404).json({
        status: "fail",
        message: "No room found with that ID",
      });
    }

    // console.log(req.user);

    if (coffee.posted_user == req.user.id || req.user.role == "admin") {
      await coffee.destroy();
      return res.status(204).json({
        status: "success",
        data: null,
      });
    }

    return res.status(400).json({
      status: "fail",
      message: "Can not delete coffee because the user is not owner or admin",
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      error: error.errors[0].message,
    });
  }
};
