const express = require("express");
const todoRouter = express.Router();

//GET /
todoRouter.get("/", (req, res) =>
  res.status(200).send("Welcome from Todo App")
);

module.exports = todoRouter;
