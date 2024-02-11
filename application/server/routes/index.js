const express = require("express");
const app = express();

const root = require("./pages/root");
const register = require("./pages/register");
const login = require("./pages/login");
const logout = require("./pages/logout");
const upload = require("./pages/upload");
const profile = require("./pages/profile");

app.use("/", root);
app.use("/registration", register);
app.use("/login", login);
app.use("/logout", logout);
app.use("/upload", upload);
app.use("/profile", profile);

const sessionCheck = require("./utilities/session-check");

app.use("/session-check", sessionCheck);

module.exports = app;
