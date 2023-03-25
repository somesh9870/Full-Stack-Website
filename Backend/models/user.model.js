const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    mobile: Number,
    isLogin: Boolean,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
