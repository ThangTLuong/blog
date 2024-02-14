import React from "react";

import { PostContainer, PostMetadata, Post, PostText, PostMedia, PostStats } from "./upload/base-post";

const Container = ({ userData, children }) => {
  const { user_id, username, user_handle, time_posted } = userData;

  return (
    <PostContainer>
      <PostMetadata metaData={{ username, time_posted }} />
      <Post>{children}</Post>
      <PostStats />
    </PostContainer>
  );
};

const GetElement = ({ isTextVisible, isMediaVisible, userData, children }) => {
  const [postText, postMedia] = React.Children.toArray(children);

  return (
    <Container userData={userData}>
      {isTextVisible && <PostText>{postText}</PostText>}
      {isMediaVisible && <PostMedia>{postMedia}</PostMedia>}
    </Container>
  );
};

export default GetElement;