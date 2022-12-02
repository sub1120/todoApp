const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    tasks: [TaskSchema],
    createdDate: {
      type: Date,
      default: null,
      get: (date) => {
        return date
          ? `${date.getDay()}-${date.getMonth()} ${date.toTimeString()}`
          : null;
      },
    },
    modifiedDate: {
      type: Date,
      default: null,
      get: (date) => {
        return date
          ? `${date.getDay()}-${date.getMonth()} ${date.toTimeString()}`
          : null;
      },
    },
  },
  {
    toJSON: { getters: true, setters: true },
  }
);

const TodoModel = mongoose.model("todo", TodoSchema);

module.exports = TodoModel;
