const express = require("express");
const userCrontroller = require("../controllers/user");

const api = express.Router();

api.post("/signup", userCrontroller.signUp);
api.post("/signin", userCrontroller.signIn);

module.exports = api;
