const server = require("./app.js");
const dotenv = require("dotenv");
const DB_connect = require("./Database/DB_connect.js");
const User = require("./Models/user.model.js");
const catchAsyncErrors = require("./Middlewares/catchAsyncErrors.js");

// dotenv Configuration
dotenv.config({
  path: "./.env",
});

DB_connect();


// Listening the port
server.listen(process.env.PORT, () => {
  console.log("Server is Running on ", process.env.PORT);
});