const express = require("express");
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const db = require('./server/models');
db.sequelize.sync()

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);

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