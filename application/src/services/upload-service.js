const upload = (state) => {
  const { text, media } = state;
  const fd = new FormData();

  if (text) fd.append("text", text);

  if (media)
    media.forEach((file) => {
      fd.append("media", file);
    });

  fetch("/posts", {
    method: "POST",
    body: fd,
  }).then((data) => {
    switch (data.status) {
      case 201:
        window.location.replace("/");
        break;
      case 400:
        alert("You have attempted to submit a file type");
        break;
      case 401:
        window.location.replace("/");
        alert("You must log in to create a post.");
        break;
      case 403:
        alert("No.");
        break;
      case 422:
        alert("You have attempted to submit a file type");
        break;
      default:
        alert(
          "There was an error while processing your post. Try again later."
        );
        break;
    }
  });
};

export { upload };
