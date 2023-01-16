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
    },
    tasks: [TaskSchema],
    createdDate: {
      type: Date,
      default: null,
      get: (date) => {
        return date ? `${date.toLocaleString()}` : null;
      },
    },
    modifiedDate: {
      type: Date,
      default: null,
      get: (date) => {
        return date ? `${date.toLocaleString()}` : null;
      },
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    toJSON: { getters: true, setters: true },
  }
);

const TodoModel = mongoose.model("todo", TodoSchema);

module.exports = TodoModel;
