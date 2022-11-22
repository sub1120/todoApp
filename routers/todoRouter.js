const express = require("express");
const { createTodo } = require("../controllers/todoController");

const todoRouter = express.Router();

//GET /
todoRouter.get("/", (req, res) =>
  res.status(200).send("Welcome from Todo App")
);

//GET /addTodo
todoRouter.post("/createTodo", createTodo);

module.exports = todoRouter;
