const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

const root = require("../backend/routes/root");

app.use("/", root);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});