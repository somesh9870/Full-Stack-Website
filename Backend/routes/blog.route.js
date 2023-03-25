const express = require("express");
const BlogModel = require("../models/blog.model");
const jwt = require("jsonwebtoken");

const blogRouter = express.Router();

// Create
blogRouter.post("/add", async (req, res) => {
  const token = req.headers.authorization;
  try {
    const blog = new BlogModel();
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Read
blogRouter.get("/", async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.status(200).send(blogs);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = blogRouter;
