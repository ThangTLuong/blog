const express = require("express");
const router = express.Router();
const isAuth = require("../../middleware/is-auth");
const upload = require("../../middleware/upload");

const { post } = require("../../controller");

router.get("/", (req, res) => {
  post.loadPost(req, res);
});

router.post("/", upload.array("media"), (req, res) => {
  post.newPost(req, res);
});

module.exports = router;
