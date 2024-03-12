const fetchPosts = () => {
  return new Promise((resolve, reject) => {
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
        resolve(fetchedPosts);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


export { fetchPosts };
