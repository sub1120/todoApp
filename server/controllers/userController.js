const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email) {
      return res.status(401).json({
        message: "Registration UnSuccessfull",
        data: {
          name: "ValidationError",
          message: "Email Required",
        },
      });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(401).json({
        message: "Registration UnSuccessfull",
        data: {
          name: "ValidationError",
          message: "Email already exists",
        },
      });
    }

    //create user
    const user = await UserModel.create({
      name,
      email,
      password,
    });

    //validate user
    await user.validate();

    //encrpyt password
    user.password = await bcrypt.hash(user.password, 10);

    //save user
    await user.save();

    user.password = undefined;
    res.status(201).json({ message: "Registration Successfull", user: user });
  } catch (error) {
    if (error.name === "ValidationError") {
      res
        .status(401)
        .json({ message: "Registration UnSuccessfull", data: error.message });
    } else {
      res
        .status(501)
        .json({ message: "Registration UnSuccessfull", data: error });
      console.log(error);
    }
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //create temp user
    const user = new UserModel({
      email,
      password,
    });

    //validate email and password
    await user.validate("email");
    await user.validate("password");

    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return res.status(401).send("User does not exits");
    }

    if (!(await bcrypt.compare(password, existingUser.password))) {
      return res.status(401).json({
        message: "Login UnSuccessfull",
        data: {
          name: "ValidationError",
          message: "Email or password is incorrect",
        },
      });
    }

    //create and save token
    existingUser.token = await jwt.sign(
      {
        id: existingUser._id,
        email,
      },
      process.env.SECRET,
      { expiresIn: "2h" }
    );

    await existingUser.save();

    user.password = undefined;
    const options = {
      expires: new Date(Date.now() + 60 * 60 * 1000),
      httpOnly: true,
    };

    return res.status(200).cookie("token", existingUser.token, options).json({
      status: "success",
      token: existingUser.token,
      user: existingUser,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(401).json({ message: "Login UnSuccessfull", data: error });
    } else {
      res.status(501).json({ message: "Login UnSuccessfull", data: error });
      console.log(error);
    }
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "Logout successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(401).json({ message: "Logout UnSuccessfull", data: error });
    } else {
      res.status(501).json({ message: "Logout UnSuccessfull", data: error });
      console.log(error);
    }
  }
};

const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id);

    return res.status(200).json({
      status: "success",
      user: user,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(401).json({ message: "Login UnSuccessfull", data: error });
    } else {
      res.status(501).json({ message: "Login UnSuccessfull", data: error });
      console.log(error);
    }
  }
};

module.exports = {
  register,
  login,
  logout,
  getUser,
};
