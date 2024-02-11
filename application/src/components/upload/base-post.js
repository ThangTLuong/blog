import React, { useState } from "react";
import formatNumber from "../format-number";

import defaultAvatar from "../../resources/default avatar.jpg";

const PostContainer = ({ children }) => {
  return (
    <div className="post-container">
      <div className="post-contents full-height">{children}</div>
    </div>
  );
};

const PostMetadata = ({ metaData }) => {
  const [avatar, username, time] = [];

  return (
    <div className="post-metadata-container">
      <div className="post-metadata">
        <div className="post-metadata-avatar-container">
          <div className="post-metadata-avatar">
            {avatar ? (
              <img src={avatar} alt="avatar" />
            ) : (
              <img src={defaultAvatar} alt="default avatar" />
            )}
          </div>
        </div>
        <div className="post-metadata-username-container">
          <div className="post-metadata-username">
            {username ? username : "username-mia-binary-banter-break"}
          </div>
        </div>
        <div className="dot-divider" />
        <div className="post-metadata-time-container">
          <div className="post-metadata-time">{time ? time : "now"}</div>
        </div>
      </div>
    </div>
  );
};

const Post = ({ children }) => {
  return <div className="post">{children}</div>;
};

const PostText = ({ children }) => {
  return <div className="post-text">{children}</div>;
};

const PostMedia = ({ children }) => {
  return <div className="post-media">{children}</div>;
};

// Using useState for now
// postData will contain all the information needed
const PostStats = ({ postData }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesNumber, setLikesNumber] = useState(0);

  const [hasCommented, setHasCommented] = useState(false);
  const [commentedNumber, setCommentedNumber] = useState(0);

  const [hasReposted, setHasReposted] = useState(false);
  const [repostedNumber, setRepostedNumber] = useState(0);

  const handleLike = () => {
    if (isLiked) setLikesNumber((prevState) => (prevState -= 1));
    else setLikesNumber((prevState) => (prevState += 1));
    setIsLiked((prevState) => !prevState);
  };

  const handleComment = () => {
    if (hasCommented) return;

    setHasCommented((prevState) => !prevState);
    setCommentedNumber((prevState) => (prevState += 1));
    // Generate a comment
  };

  const handleRepost = () => {
    if (hasReposted) return;

    setHasReposted((prevState) => !prevState);
    setRepostedNumber((prevState) => (prevState += 1));
    // Repost
  };

  return (
    <div className="post-stats-container">
      <div className="post-stats">
        <div className="post-stats-overlay-container">
          <div className="post-stats-overlay">
            <div className="post-comments-stat" onClick={handleComment}>
              <div className="post-comments-icon">
                <span className="material-symbols-outlined">chat_bubble</span>
              </div>
              <div className="post-comments-number">
                {formatNumber(commentedNumber)}
              </div>
            </div>
          </div>
        </div>
        <div className="post-stats-overlay-container">
          <div className="post-stats-overlay">
            <div className="post-reposts-stat" onClick={handleRepost}>
              <div className="post-reposts-icon">
                <span className="material-symbols-outlined">repeat</span>
              </div>
              <div className="post-reposts-number">
                {formatNumber(repostedNumber)}
              </div>
            </div>
          </div>
        </div>
        <div className="post-stats-overlay-container">
          <div className="post-stats-overlay">
            <div className="post-likes-stat" onClick={handleLike}>
              <div className="post-likes-icon">
                {isLiked ? (
                  <span className="material-icons-outlined">favorite</span>
                ) : (
                  <span className="material-symbols-outlined">favorite</span>
                )}
              </div>
              <div className="post-likes-number">
                {formatNumber(likesNumber)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PostContainer, PostMetadata, Post, PostText, PostMedia, PostStats };
