const TodoModel = require("../models/todo");

const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required.",
      });
    }

    const existingTodo = await TodoModel.findOne({ title });
    if (existingTodo) {
      return res.status(400).json({
        success: false,
        message: "Title should be unique.",
      });
    }

    const todo = await TodoModel.create({ title });
    res.status(201).json({
      success: true,
      message: "Todo created successfully.",
      data: todo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();

    if (todos.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No todo exists",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todos fetched successfully",
      data: todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getTodoById = async (req, res) => {
  try {
    const todoId = req.params.id;

    const todo = await TodoModel.findById(todoId);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo fetched successfully",
      data: todo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
};
