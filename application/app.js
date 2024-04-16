const express = require("express");
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const db = require("./server/models");
db.sequelize.sync();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

const route = require("./server/routes");

app.use("/api", route);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});