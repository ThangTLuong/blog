const express = require("express");
const app = express();

const version = "/v1";

const root = require("./pages/root");
const register = require("./pages/register");
const login = require("./pages/login");
const logout = require("./pages/logout");
const upload = require("./pages/upload");
const profile = require("./pages/profile");

app.use(`${version}/`, root);
app.use(`${version}/registration`, register);
app.use(`${version}/login`, login);
app.use(`${version}/logout`, logout);
app.use(`${version}/upload`, upload);
app.use(`${version}/profile`, profile);

const sessions = require("./utilities/sessions");
const posts = require("./utilities/posts");

app.use(`${version}/sessions`, sessions);
app.use(`${version}/posts`, posts);

module.exports = app;
