import React from "react";

import { PostContainer, PostMetadata, Post, PostText, PostMedia, PostStats } from "../base-post";

const Container = ({ children }) => {
  return (
    <PostContainer>
      <PostMetadata />
      <Post>
        {children}
      </Post>
      <PostStats />
    </PostContainer>
  );
}

const getElement = ({ isTextVisible, isMediaVisible }) => {
  return (
    <Container>
      {isTextVisible && 
      <PostText>
      </PostText>
      }
      {isMediaVisible && 
      <PostMedia>
      </PostMedia>
      }
    </Container>
  );
};

export { getElement };