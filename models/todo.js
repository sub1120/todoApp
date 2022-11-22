const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  tasks: [TaskSchema],
});

const TodoModel = mongoose.model("todo", TodoSchema);

module.exports = TodoModel;
