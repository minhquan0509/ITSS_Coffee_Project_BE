const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "public", "coffees"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + uuidv4();
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Unsupported File !!"));
  }
};

exports.upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter,
});

// const hostName = `${process.env.HOSTNAME || "localhost"}:${
//   process.env.NODE_APP_PORT_NUMBER || 3001
// }/`;

exports.handlePostCoffeeImages = (req, res, next) => {
  try {
    const coffeeImages = req.files.map((file) => {
      return "coffees/" + file.filename;
    });

    req.body.images = coffeeImages;
    return next();
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: "Some error when uploading file...",
      error,
    });
  }
};
