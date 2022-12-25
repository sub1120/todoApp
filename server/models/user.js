const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: [true, "Required"],
    match: [/^[a-zA-Z\s]+$/, "Only letters allowed"],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Required"],
    match: [/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Invalid email address"],
  },
  password: {
    type: String,
    required: [true, "Required"],
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "todo",
    },
  ],
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
