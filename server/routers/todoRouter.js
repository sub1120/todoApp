const express = require("express");
const {
  createTodo,
  getTodos,
  getTodoById,
  deleteTodoById,
  editTitleById,
  addTaskById,
  editTaskNameById,
  deleteTaskById,
} = require("../controllers/todoController");

const todoRouter = express.Router();

//GET /
todoRouter.get("/", (req, res) =>
  res.status(200).send("Welcome from Todo App")
);

//POST /todo
todoRouter.post("/todo", createTodo);

//GET /todo
todoRouter.get("/todo", getTodos);

//GET /todo/:id
todoRouter.get("/todo/:id", getTodoById);

//DELETE /todo/:id
todoRouter.delete("/todo/:id", deleteTodoById);

//PUT /todo/:id
todoRouter.put("/todo/:id", editTitleById);

//PUT /todo/:id/task
todoRouter.put("/todo/:id/task", addTaskById);

//PUT /todo/:id/task/:tid
todoRouter.put("/todo/:id/task/:tid", editTaskNameById);

//DELETE /todo/:id/task/:tid
todoRouter.delete("/todo/:id/task/:tid", deleteTaskById);

module.exports = todoRouter;
