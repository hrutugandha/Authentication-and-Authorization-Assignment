const express = require('express');

const app = express();

app.use(express.json());

const userController = require('./controllers/user.controller');

const {register,signup} = require('./controllers/auth.controller');
//const authController = require('./controllers/auth.controller');


app.use("/users",userController);
app.post("/register", register);
app.post("/signup", signup);

module.exports = app;