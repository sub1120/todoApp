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

    const existingTodo = await TodoModel.findOne({
      title,
      userId: req.body.userId,
    });
    if (existingTodo) {
      return res.status(400).json({
        success: false,
        message: "Title should be new and unique.",
      });
    }

    const currentDate = new Date();
    const todo = await TodoModel.create({
      title,
      createdDate: currentDate,
      modifiedDate: currentDate,
      userId: req.body.userId,
    });

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
    if (existingTodo) {
      return res.status(400).json({
        success: false,
        message: "Title should be new and unique.",
      });
    }

    todo.title = newTitle;
    todo.modifiedDate = new Date();
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
        message: "Task name is required.",
      });
    }

    const todo = await TodoModel.findById(todoId);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    const existingTask = todo.tasks.find((task) => task.name === taskName);
    if (existingTask) {
      return res.status(400).json({
        success: false,
        message: "Task name should be new and unique.",
      });
    }

    todo.tasks.push({ name: taskName });
    todo.modifiedDate = new Date();
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

const editTaskNameById = async (req, res) => {
  try {
    const todoId = req.params.id;
    const taskId = req.params.tid;

    const newTaskName = req.body.taskName;

    if (!newTaskName) {
      return res.status(400).json({
        success: false,
        message: "Task name is required.",
      });
    }

    const todo = await TodoModel.findById(todoId);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found.",
      });
    }

    const task = todo.tasks.id(taskId);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    const existingTask = todo.tasks.find((task) => task.name === newTaskName);
    if (existingTask) {
      return res.status(400).json({
        success: false,
        message: "Task name should be new and unique.",
      });
    }

    task.name = newTaskName;
    todo.modifiedDate = new Date();
    const updatedTodo = await todo.save();

    res.status(200).json({
      success: true,
      message: "Task name updated successfully",
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

const deleteTaskById = async (req, res) => {
  try {
    const todoId = req.params.id;
    const taskId = req.params.tid;

    const todo = await TodoModel.findById(todoId);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found.",
      });
    }

    const task = todo.tasks.id(taskId);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    task.remove();
    todo.modifiedDate = new Date();
    const updatedTodo = await todo.save();
    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
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
  editTaskNameById,
  deleteTaskById,
};
