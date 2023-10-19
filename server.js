const express = require("express");
const app = express();
require("dotenv").config();
const connectTomongo = require("./db");
connectTomongo();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
