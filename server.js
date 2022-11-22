require("dotenv").config();
const app = require("./app");
const { PORT } = process.env || 4000;

app.listen(PORT, () =>
  console.log(`Todo App server is listning at PORT ${PORT}`)
);
