const express = require("express");
const connection = require("./db");
require("dotenv").config();

const app = express();

app.use(express.json());

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Server is connected to DB");
  } catch (err) {
    console.log("DB connection error");
  }
  console.log(`Server is running at ${process.env.port}`);
});
