const express = require("express");
const app = express();
require("dotenv").config();
const connectTomongo = require("./db");
connectTomongo();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/player", require("./routes/player"));
app.use("/api/team", require("./routes/team"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
