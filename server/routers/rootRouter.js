const express = require("express");
const {
  register,
  login,
  getUser,
  logout,
} = require("../controllers/userController");

//import middlewares
const auth = require("../middlware/auth");
const todoRouter = require("./todoRouter");

const rootRouter = express.Router();

//POST /register
rootRouter.post("/register", register);

//POST /login
rootRouter.post("/login", login);

//POST /login
rootRouter.post("/logout", logout);

//GET /user
rootRouter.get("/user", auth, getUser);

//Todo routes
rootRouter.use("/todo", auth, todoRouter);

module.exports = rootRouter;
