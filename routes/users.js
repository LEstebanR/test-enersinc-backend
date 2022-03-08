const express = require("express");
const Controller = require("../controllers/users.controller.js")

const app = express.Router();

app.get('/users', Controller.getUsers);
app.post('/users', Controller.createUser);
app.delete('/user', Controller.deleteUser);

module.exports = app;