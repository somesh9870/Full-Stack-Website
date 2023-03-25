const express = require("express");
const connection = require("./db");
const auth = require("./middlewares/auth.middleware");
const blogRouter = require("./routes/blog.route");
const userRouter = require("./routes/user.routes");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use("cors");

app.use(express.json());
app.use("/users", userRouter);
// app.use(auth);
app.use("/blogs", blogRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Server is connected to DB");
  } catch (err) {
    console.log("DB connection error");
  }
  console.log(`Server is running at ${process.env.port}`);
});
