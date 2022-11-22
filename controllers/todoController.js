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

module.exports = {
  createTodo,
};
