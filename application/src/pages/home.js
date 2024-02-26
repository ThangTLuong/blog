import React, { useEffect, useState } from "react";
import GetElement from "../components/post-container";
import "./styles/home.css";
import MediaDisplay from "../components/upload/media-display";

const useFetchPost = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch("/posts", {
      method: "GET",
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Error fetching posts.");
        }
        return res.json();
      })
      .then((fetchedPosts) => {
        if (isMounted) {
          setPosts((prevPosts) => [...prevPosts, ...fetchedPosts]);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        alert("An error has occurred.");
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { posts, isLoading };
};

const Home = () => {
  const [mediaMinHeight, setMediaMinHeight] = useState(631);
  const [textsMinHeight, setTextsMinHeight] = useState(250);
  const { posts, isLoading } = useFetchPost();

  const showMoreMedia = () => {
    setMediaMinHeight((prevState) => prevState + 631);
  };

  const showLessMedia = () => {
    setMediaMinHeight((prevState) => {
      if (prevState - 631 >= 631) {
        return prevState - 631;
      } else {
        return prevState;
      }
    });
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
        <div
          className="media-container"
          style={{ minHeight: `${mediaMinHeight}px` }}
        >
          {isLoading
            ? "Loading..."
            : posts.map((post, index) => (
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
        {mediaMinHeight > 631 ? (
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
            <div className="button" onClick={showMoreMedia}>
              Show more
            </div>
          </div>
        )}
        <div
          className="texts-container"
          style={{ minHeight: `${textsMinHeight}px` }}
        >
          {Array.from({ length: 12 * 10 }).map((_, index) => (
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
      </div>
    </div>
  );
};

export default Home;
