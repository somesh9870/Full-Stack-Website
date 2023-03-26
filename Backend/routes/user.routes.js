const express = require("express");
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const isEmail = await UserModel.findOne({ email: email });
    if (isEmail) {
      res.status(400).send({ message: "Email already exists" });
    } else {
      bcrypt.hash(password, 4, async (err, hash) => {
        const payload = {
          firstname,
          lastname,
          email,
          password: hash,
        };
        const user = new UserModel(payload);
        await user.save();
        res.status(200).send({ message: "Registration successful" });
      });
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(200).send({
            message: "Login successful",
            token: (token = jwt.sign({ userID: user._id }, "somesh")),
          });
        } else {
          res.status(400).send({ message: "Invalid password" });
        }
      });
    } else {
      res.status(400).send({ message: "Invalid email" });
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = userRouter;
