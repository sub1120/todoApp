const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).send("Token does not exists");
    }

    req.user = jwt.verify(token, process.env.SECRET);
  } catch (error) {
    console.log(error);
    return;
  }

  return next();
};

module.exports = auth;
