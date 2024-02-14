const upload = (state) => {
  const { userId, text, media } = state;

  fetch("/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_id: userId, text, media }),
  }).then((data) => {
    switch (data.status) {
      case 201:
        break;
      case 400:
        break;
      case 401:
        break;
      case 403:
        break;
      case 422:
        break;
      default:
        break;
    }
  });
};

export { upload };
