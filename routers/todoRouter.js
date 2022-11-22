const express = require("express");
const {
  createTodo,
  getTodos,
  getTodoById,
} = require("../controllers/todoController");

const todoRouter = express.Router();

//GET /
todoRouter.get("/", (req, res) =>
  res.status(200).send("Welcome from Todo App")
);

//POST /addTodo
todoRouter.post("/createTodo", createTodo);

//GET /getTodos
todoRouter.get("/getTodos", getTodos);

//GET /getTodo
todoRouter.get("/getTodo/:id", getTodoById);

module.exports = todoRouter;
