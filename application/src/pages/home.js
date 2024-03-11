import React, { useEffect, useState } from "react";
import GetElement from "../components/post-container";
import "./styles/home.css";
import MediaDisplay from "../components/upload/media-display";
import { fetchPosts } from "../services/fetch-posts";

const useFetchPost = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetchPosts()
      .then((fetchedPosts) => {
        if (isMounted) {
          setPosts((prevState) => [...prevState, ...fetchedPosts]);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        alert("Couldn't fetch posts.");
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { posts, isLoading };
};

const Home = () => {
  const [maxMediaDisplay, setMaxMediaDisplay] = useState(3);
  const [textsMinHeight, setTextsMinHeight] = useState(250);
  const { posts, isLoading } = useFetchPost();

  const showMoreMedia = () => {
    if (maxMediaDisplay + 3 <= posts.length)
      setMaxMediaDisplay((prevState) => prevState + 3);
  };

  const showLessMedia = () => {
    if (maxMediaDisplay - 3 >= 0)
      setMaxMediaDisplay((prevState) => prevState - 3);
  };

  const showMoreTexts = () => {
    setTextsMinHeight((prevState) => prevState + 250);
  };

  const parseMedia = (medias) => {
    const media = [];

    medias.forEach((mediaObj) => {
      const byteData = mediaObj.media.data;
      const blob = new Blob([new Uint8Array(byteData)], { type: "image/jpeg" });
      const imgUrl = URL.createObjectURL(blob);
      media.push({ preview: imgUrl });
    });

    return media;
  };

  return (
    <div id="body">
      <div className="posts-container">
        <div className="media-container">
          {isLoading
            ? "Loading..."
            : posts.slice(0, maxMediaDisplay).map((post, index) => (
                <div className="media-item" key={`post-${index}`}>
                  <div className="item">
                    <GetElement
                      isTextVisible={post.text ? true : false}
                      isMediaVisible={post.medias ? true : false}
                      userData={{
                        user_id: post.user.user_id,
                        username: post.user.username,
                        user_handle: post.user.user_handle,
                        time_posted: post.date_time,
                      }}
                    >
                      <p className="post-text-area">{post.text.text}</p>
                      <MediaDisplay media={parseMedia(post.medias)} />
                    </GetElement>
                  </div>
                </div>
              ))}
        </div>
        {maxMediaDisplay > 3 ? (
          maxMediaDisplay + 3 <= posts.length ? (
            <div className="button-group">
              <div className="button" onClick={showLessMedia}>
                Show less
              </div>
              <div className="button" onClick={showMoreMedia}>
                Show more
              </div>
            </div>
          ) : (
            <div className="button-group">
              <div className="button" onClick={showLessMedia}>
                Show less
              </div>
            </div>
          )
        ) : maxMediaDisplay + 3 <= posts.length ? (
          <div className="button-group">
            <div className="button" onClick={showMoreMedia}>
              Show more
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="margin"></div>
        <div
          className="texts-container"
          style={{ minHeight: `${textsMinHeight}px` }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="texts-item" key={index}>
              <div className="item"></div>
            </div>
          ))}
        </div>
        <div className="button-group">
          <div className="button" onClick={showMoreTexts}>
            Show more
          </div>
        </div>
        <div className="margin"></div>
      </div>
    </div>
  );
};

export default Home;
