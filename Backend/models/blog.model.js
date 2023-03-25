const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: String,
    content: String,
    author: String,
  },
  {
    versionKey: false,
  }
);

const BlogModel = mongoose.model("Blog", blogSchema);

module.exports = BlogModel;
