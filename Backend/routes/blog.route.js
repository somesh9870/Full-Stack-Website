const express = require("express");
const BlogModel = require("../models/blog.model");
const jwt = require("jsonwebtoken");

const blogRouter = express.Router();

// Create
blogRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const blog = new BlogModel(payload);
    await blog.save();
    res.status(200).send({ message: "Blog is posted" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Read
blogRouter.get("/", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "somesh");
  try {
    if (decoded) {
      const userID = decoded.userID;
      const blogs = await BlogModel.find({ userID: userID });
      res.status(200).send(blogs);
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Update
blogRouter.patch("/update/:blogID", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "somesh");
  const userID = decoded.userID;
  const { blogID } = req.params;
  const payload = req.body;
  try {
    const blog = await BlogModel.findOne({ _id: blogID });
    if (blog.userID === userID) {
      await BlogModel.findByIdAndUpdate({ _id: blogID }, payload);
      res.status(200).send({ message: "Blog has been updated" });
    } else {
      res.status(400).send({ message: "Not authorized" });
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Delete
blogRouter.delete("/delete/:blogID", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "somesh");
  const userID = decoded.userID;
  const { blogID } = req.params;
  try {
    const blog = await BlogModel.findOne({ _id: blogID });
    if (blog.userID === userID) {
      await BlogModel.findByIdAndDelete({ _id: blogID });
      res.status(200).send({ message: "Blog deleted successfully" });
    } else {
      res.status(400).send({ message: "Not authorized" });
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = blogRouter;
