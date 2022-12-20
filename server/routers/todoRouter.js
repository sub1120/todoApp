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

//POST /todo
todoRouter.post("/", createTodo);

//GET /todo
todoRouter.get("/", getTodos);

//GET /todo/:id
todoRouter.get("/:id", getTodoById);

//DELETE /todo/:id
todoRouter.delete("/:id", deleteTodoById);

//PUT /todo/:id
todoRouter.put("/:id", editTitleById);

//PUT /todo/:id/task
todoRouter.put("/:id/task", addTaskById);

//PUT /todo/:id/task/:tid
todoRouter.put("/:id/task/:tid", editTaskNameById);

//DELETE /todo/:id/task/:tid
todoRouter.delete("/:id/task/:tid", deleteTaskById);

module.exports = todoRouter;
