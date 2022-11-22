const express = require("express");
const { createTodo, getTodos } = require("../controllers/todoController");

const todoRouter = express.Router();

//GET /
todoRouter.get("/", (req, res) =>
  res.status(200).send("Welcome from Todo App")
);

//GET /addTodo
todoRouter.post("/createTodo", createTodo);

//GET /getTodos
todoRouter.get("/getTodos", getTodos);

module.exports = todoRouter;
