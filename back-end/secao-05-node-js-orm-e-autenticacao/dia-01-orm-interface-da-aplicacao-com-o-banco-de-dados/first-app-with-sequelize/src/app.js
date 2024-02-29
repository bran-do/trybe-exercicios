const express = require('express');

const userController = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/users', userController.getAll);

module.exports = app;