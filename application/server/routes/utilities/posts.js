const express = require("express");
const router = express.Router();
const isAuth = require("../../middleware/is-auth");
const upload = require("../../middleware/upload");

const { post } = require("../../controller");

// Original
// Load posts for home
router.get("/", (req, res) => {
  post.loadPost(req, res);
});

// link: v1/api/posts?media=true
// Get ones with and without media based on if media is true or not.
router.get('/', (req, res) => {
  const media = req.query.media;

  // If media is true
  // fetch posts with text && media, or just media
  // If media is false
  // fetch posts with only text
  // if (media === 'true') {
  //   post.loadPost(req, res);
  // } else {
  //   post.loadPost(req, res);
  // }
})

// Load posts for user profiles
router.get("/:userhandle", (req, res) => {
  const userhandle = req.params.userhandle;

  // post.loadPost(req, res, userhandle);
});

router.post("/", isAuth, upload.array("media"), (req, res) => {
  post.newPost(req, res);
});

module.exports = router;
