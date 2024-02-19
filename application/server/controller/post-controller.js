const {
  models: { Post, Text, Media, Like, Comment, Repost },
} = require("../models");
const status = require("../status");

module.exports = {
  newPost: (req, res) => {
    const { original_post_id, text } = req.body;
    const { user_id } = req.session;
    const media = req.files;
    let newPostInstance;

    const basePost = {
      user_id: 1,
      date_time: new Date(),
    };

    const post = original_post_id
      ? { ...basePost, original_post_id }
      : basePost;

    Post.create(post)
      .then((newPost) => {
        newPostInstance = newPost;

        return Text.create({
          post_id: newPost.post_id,
          text,
        });
      })
      .then(() => {
        const mediaPromises = media.map((mediaContent) => {
          return Media.create({
            post_id: newPostInstance.post_id,
            media: mediaContent.buffer,
          });
        });

        return Promise.all(mediaPromises);
      })
      .then(() => {
        const like = Like.create({ post_id: newPostInstance.post_id });
        const comment = Comment.create({ post_id: newPostInstance.post_id });
        const repost = Repost.create({ post_id: newPostInstance.post_id });

        return Promise.all([like, comment, repost]);
      })
      .then(() => {
        status.Created(req, res, "Post created successfully.");
      })
      .catch((err) => {
        status.InternalServerError(req, res, err);
        console.log(err.message);
      });
  },

  loadPost: (req, res) => {
    const { user_id, limit } = req.body;

    const baseQuery = {
      order: [["date_time"], "DESC"],
      limit: limit || 4,
      include: [
        { model: Text },
        { model: Media },
        { model: Like },
        { model: Comment },
        { model: Repost },
      ],
    };

    const query = user_id ? { ...baseQuery, where: { user_id } } : baseQuery;

    Post.findAll(query)
      .then((posts) => {
        status.Ok(req, res, posts);
      })
      .catch((err) => {
        status.InternalServerError(req, res, err);
      });
  },
};
