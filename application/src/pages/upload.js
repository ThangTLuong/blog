import React, { useState } from "react";

import UploadOptions from "../components/upload/upload-options";
import LeftSection from "../components/upload/left-section";
import RightSection from "../components/upload/right-section";
import MainSection from "../components/upload/main-section";

import { PostContainer, PostMetadata, Post, PostText, PostMedia, PostStats } from "../components/upload/base-post";

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

const Upload = () => {
  const [addElements, setAddElements] = useState([]);
  const [isTextAdded, setIsTextAdded] = useState(false);
  const [isMediaAdded, setIsMediaAdded] = useState(false);

  const onAddPostText = () => {
    if (isMediaAdded) {
      setAddElements([
        <Container>
          <PostText />
          <PostMedia />
        </Container>
      ]);
      setIsTextAdded(true);
      setIsMediaAdded(true);
    } else if (!isTextAdded) {
      setAddElements([
        ...addElements,
        <Container>
          <PostText />
        </Container>
      ]);
      setIsTextAdded(true);
    }
  };

  const onAddPostMedia = () => {
    if (isTextAdded) {
      setAddElements([
        <Container>
          <PostText />
          <PostMedia />
        </Container>
      ]);
      setIsTextAdded(true);
      setIsMediaAdded(true);
    } else if (!isMediaAdded) {
      setAddElements([
        ...addElements,
        <Container>
          <PostMedia />
        </Container>
      ]);
      setIsMediaAdded(true);
    }
  };

  const onPostClear = () => {
    setIsTextAdded(false);
    setIsMediaAdded(false);
    setAddElements([]);
  }

  return (
    <div id="body">
      <div className="display-sections-group flex h-full w-full">
        <LeftSection onAddPostText={onAddPostText} onAddPostMedia={onAddPostMedia} onPostClear={onPostClear}/>
        <MainSection addElements={addElements} />
        <RightSection />
      </div>
      <UploadOptions />
    </div>
  );
}

export default Upload;