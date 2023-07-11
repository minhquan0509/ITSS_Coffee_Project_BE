const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
require("./models/index");
const userRouter = require("./routes/userRoutes");
const coffeeRouter = require("./routes/coffeeRoutes");

dotenv.config({
  path: "./config.env",
});

const corsOptions = {
  origin: 'https://kissaten-fe.vercel.app',
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

// Declare all routes using in app
app.use("/users", userRouter);
app.use("/coffees", coffeeRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.listen(process.env.NODE_APP_PORT_NUMBER, () =>
  console.log("server is running in port 3001")
);
