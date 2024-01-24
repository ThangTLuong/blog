import React, { useState } from "react";
import Tooltip from "../components/tooltip";

import UploadOptions from "../components/upload/upload-options";
import LeftSection from "../components/left-section";
import RightSection from "../components/right-section";
import MainSection from "../components/main-section";

import options from "../resources/options.png";

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
        <LeftSection>
          <div className="w-full p-2">
            <Tooltip text={ "Text" } direction={"left"}>
              <div className="bg-black rounded-full" onClick={onAddPostText}>
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </div>
            </Tooltip>
          </div>
          <div className="w-full p-2">
            <Tooltip text={ "Media" } direction={"left"}>
              <div className="bg-black rounded-full" onClick={onAddPostMedia}>
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </div>
            </Tooltip>
          </div>
          <div className="w-full p-2">
            <Tooltip text={ "Clear" } direction={"left"}>
              <div className="bg-black rounded-full" onClick={onPostClear}>
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </div>
            </Tooltip>
          </div>
        </LeftSection>
        <MainSection>
          { addElements.map((element, index) => (
            <React.Fragment key={index}>
              {element}
            </React.Fragment>
          ))
          }
        </MainSection>
        <RightSection>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
        </RightSection>
      </div>
      <UploadOptions />
    </div>
  );
}

export default Upload;