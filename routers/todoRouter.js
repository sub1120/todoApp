const express = require("express");
const {
  createTodo,
  getTodos,
  getTodoById,
  deleteTodoById,
  editTitleById,
  addTaskById,
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

//POST /delTodo
todoRouter.post("/deleteTodo/:id", deleteTodoById);

//PUT /editTodoTitle
todoRouter.put("/editTitle/:id", editTitleById);

//PUT /addTask
todoRouter.put("/addTask/:id", addTaskById);

module.exports = todoRouter;
