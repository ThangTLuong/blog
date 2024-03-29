const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {});

router.get("/:postId", (req, res) => {});

router.get("/:postId/likes", (req, res) => {});

router.get("/:postId/comments", (req, res) => {});

router.get("/:postId/reposts", (req, res) => {});

module.exports = router;
