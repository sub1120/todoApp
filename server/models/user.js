const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: [true, "UserName Required"],
    match: [/^[a-zA-Z\s]+$/, "Invalid UserName"],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Email Required"],
    match: [/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Invalid Email"],
  },
  password: {
    type: String,
    required: [true, "Password Required"],
  },
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
