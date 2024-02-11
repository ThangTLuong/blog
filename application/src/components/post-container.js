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

const GetElement = ({ isTextVisible, isMediaVisible, children }) => {
  const [postText, postMedia] = React.Children.toArray(children);

  return (
    <Container>
      {isTextVisible && 
      <PostText>
        { postText }
      </PostText>
      }
      {isMediaVisible && 
      <PostMedia>
        { postMedia }
      </PostMedia>
      }
    </Container>
  );
};

export default GetElement;