const { connect } = require("mongoose");
const { DB_URI } = process.env;

const connectDB = async () => {
  try {
    await connect(DB_URI);
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
