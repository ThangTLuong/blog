import React from "react";

const PostContainer = ({ children }) => {
  return (
    <div className="post-container">
      <div className="post-contents full-height">
        {children}
      </div>
    </div>
  );
}

const PostMetadata = ({ children }) => {
  return (
    <div className="post-metadata">
      <div className="post-metadata-div">
        {children}
      </div>
    </div>
  );
}

const Post = ({ children }) => {
  return (
    <div className="post">
      {children}
    </div>
  );
}

const PostText = ({ children }) => {
  return (
    <div className="post-text">
      {children}
    </div>
  );
}

const PostMedia = ({ children }) => {
  return (
    <div className="post-media">
      {children}
    </div>
  );
}

const PostStats = ({ children }) => {
  return (
    <div className="post-stats">
      <div className="post-stats-div">
        {children}
      </div>
    </div>
  );
}

export { PostContainer, PostMetadata, Post, PostText, PostMedia, PostStats };