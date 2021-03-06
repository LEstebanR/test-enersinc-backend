const express = require("express");
const Controller = require("../controllers/users.controller.js")

const app = express.Router();

app.get('/users', Controller.getUsers);
app.get('/user/:id', Controller.getUser);
app.post('/users', Controller.createUser);
app.delete('/user', Controller.deleteUser);
app.put('/user/:id', Controller.updateUser);

module.exports = app;