const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const root = require("./server/routes/root");
const register = require("./server/routes/register");
const login = require("./server/routes/login");
const upload = require("./server/routes/upload");
const profile = require("./server/routes/profile");

app.use("/", root);
app.use("/registration", register);
// app.use("/login", login);
// app.use("/upload", upload);
// app.use("/profile", profile);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});