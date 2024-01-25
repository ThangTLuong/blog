import React from "react";

import { PostContainer, PostMetadata, Post, PostText, PostMedia, PostStats } from "./upload/base-post";

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

const GetElement = ({ isTextVisible, isMediaVisible, postText = null, postMedia = [] }) => {
  return (
    <Container>
      {isTextVisible && 
      <PostText>
        { postText }
      </PostText>
      }
      {isMediaVisible && 
      <PostMedia>
        { 
          postMedia.map((imageName, index) => (
            <img key={index} src={imageName} alt={`${index}`} />
          ))
        }
      </PostMedia>
      }
    </Container>
  );
};

export default GetElement;