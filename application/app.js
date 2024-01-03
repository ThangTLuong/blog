const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const root = require("./server/routes/root");
const register = require("./server/routes/register");

app.use("/", root);
app.use("/registration", register);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});