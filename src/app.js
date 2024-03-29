const express = require("express");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require('compression'); 
const app = express();

//init midleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

//init db

//init routes
app.get("/", (req, res, next) => {
  const strCompres = "Testing compression";
  return res
    .status(200)
    .json({ message: "Welcome Tobi19", metadata: strCompres.repeat(100000) });
});
// handle error

module.exports = app;
