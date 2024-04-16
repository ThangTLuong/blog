const upload = (state) => {
  const { text, media } = state;
  const fd = new FormData();

  fd.append("text", text);
  media.forEach((file) => {
    fd.append("media", file);
  });

  fetch("/posts", {
    method: "POST",
    body: fd,
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
