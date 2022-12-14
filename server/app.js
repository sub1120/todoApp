const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const cors = require("cors");
const todoRouter = require("./routers/todoRouter");
const rootRouter = require("./routers/rootRouter");

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use("/api/v1", rootRouter);

module.exports = app;
