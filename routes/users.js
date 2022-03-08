const express = require("express");
const Controller = require("../controllers/users.controller.js")

const app = express.Router();

app.get('/users', Controller.getUsers);

module.exports = app;