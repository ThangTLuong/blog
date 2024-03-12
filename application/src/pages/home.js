import React, { useEffect, useState } from "react";
import GetElement from "../components/post-container";
import "./styles/home.css";
import MediaDisplay from "../components/upload/media-display";
import { fetchPosts } from "../services/fetch-posts";

const useFetchPost = () => {
  const [mediaPosts, setMediaPosts] = useState([]);
  const [textPosts, setTextPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetchPosts()
      .then((fetchedPosts) => {
        if (isMounted) {
          fetchedPosts.forEach((post) => {
            if (post.medias && post.medias.length > 0)
              setMediaPosts((prevState) => [...prevState, post]);
            else {
              setTextPosts((prevState) => [...prevState, post]);
            }
          });
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { mediaPosts, textPosts, isLoading };
};

const Home = () => {
  const [maxMediaDisplay, setMaxMediaDisplay] = useState(3);
  const [maxTextsDisplay, setMaxTextsDisplay] = useState(3);
  const { mediaPosts, textPosts, isLoading } = useFetchPost();

  const showMoreMedia = () => {
    if (maxMediaDisplay + 3 <= mediaPosts.length)
      setMaxMediaDisplay((prevState) => prevState + 3);
  };

  const showLessMedia = () => {
    if (maxMediaDisplay - 3 >= 0)
      setMaxMediaDisplay((prevState) => prevState - 3);
  };

  const showMoreTexts = () => {
    if (maxTextsDisplay + 3 <= textPosts.length)
      setMaxTextsDisplay((prevState) => prevState + 3);
  };

  const showLessTexts = () => {
    if (maxTextsDisplay - 3 >= 0)
      setMaxTextsDisplay((prevState) => prevState - 3);
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
            : mediaPosts.slice(0, maxMediaDisplay).map((post, index) => (
                <div className="media-item" key={`post-${index}`}>
                  <div className="item">
                    <GetElement
                      isTextVisible={true}
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
          maxMediaDisplay + 3 <= mediaPosts.length ? (
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
        ) : maxMediaDisplay + 3 <= mediaPosts.length ? (
          <div className="button-group">
            <div className="button" onClick={showMoreMedia}>
              Show more
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="margin"></div>
        <div className="texts-container">
          {isLoading
            ? "Loading"
            : textPosts.slice(0, maxTextsDisplay).map((post, index) => (
                <div className="texts-item" key={`post-${index}`}>
                  <div className="item">
                    <GetElement
                      isTextVisible={true}
                      isMediaVisible={false}
                      userData={{
                        user_id: post.user.user_id,
                        username: post.user.username,
                        user_handle: post.user.user_handle,
                        time_posted: post.date_time,
                      }}
                    >
                      <p className="post-text-area">{post.text.text}</p>
                    </GetElement>
                  </div>
                </div>
              ))}
        </div>
        {maxTextsDisplay > 3 ? (
          maxTextsDisplay + 3 <= textPosts.length ? (
            <div className="button-group">
              <div className="button" onClick={showLessTexts}>
                Show less
              </div>
              <div className="button" onClick={showMoreTexts}>
                Show more
              </div>
            </div>
          ) : (
            <div className="button-group">
              <div className="button" onClick={showLessTexts}>
                Show less
              </div>
            </div>
          )
        ) : maxTextsDisplay + 3 <= textPosts.length ? (
          <div className="button-group">
            <div className="button" onClick={showMoreTexts}>
              Show more
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="margin"></div>
      </div>
    </div>
  );
};

export default Home;
