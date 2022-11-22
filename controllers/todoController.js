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

const deleteTodoById = async (req, res) => {
  try {
    const todoId = req.params.id;

    const todo = await TodoModel.findByIdAndDelete(todoId);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo delelted successfully.",
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

const editTitleById = async (req, res) => {
  try {
    const todoId = req.params.id;
    const newTitle = req.body.title;

    if (!newTitle) {
      return res.status(400).json({
        success: false,
        message: "Title is required.",
      });
    }

    let todo = await TodoModel.findById(todoId);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found.",
      });
    }

    const existingTodo = await TodoModel.findOne({ title: newTitle });
    if (existingTodo || todo.title === newTitle) {
      return res.status(400).json({
        success: false,
        message: "Title should be new and unique.",
      });
    }

    todo.title = newTitle;
    const updatedTodo = await todo.save();

    res.status(200).json({
      success: true,
      message: "Title updated successfully",
      data: updatedTodo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const addTaskById = async (req, res) => {
  try {
    const todoId = req.params.id;
    const taskName = req.body.taskName;

    if (!taskName) {
      return res.status(400).json({
        success: false,
        message: "Task is required.",
      });
    }

    const todo = await TodoModel.findById(todoId);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    console.log(todo);

    const existingTask = todo.tasks.find((task) => task.name === taskName);
    if (existingTask) {
      return res.status(400).json({
        success: false,
        message: "Task name should be new and unique.",
      });
    }

    todo.tasks.push({ name: taskName });
    const updatedTodo = await todo.save();

    res.status(200).json({
      success: true,
      message: "Task added successfully",
      data: updatedTodo,
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
  deleteTodoById,
  editTitleById,
  addTaskById,
};
