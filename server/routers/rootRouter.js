const express = require("express");
const { register, login } = require("../controllers/userController");

//import middlewares
const auth = require("../middlware/auth");
const todoRouter = require("./todoRouter");

const rootRouter = express.Router();

//POST /register
rootRouter.post("/register", register);

//POST /login
rootRouter.get("/login", login);

//Todo routes
rootRouter.use("/todo", auth, todoRouter);

module.exports = rootRouter;
