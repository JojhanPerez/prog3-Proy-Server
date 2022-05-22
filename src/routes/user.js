const express = require("express");
const userCrontroller = require("../controllers/user");

const api = express.Router();

api.post("/signup", userCrontroller.signUp);

module.exports = api;
