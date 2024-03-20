function registration(state) {
  const { email, username, password, rePassword } = state;

  fetch("/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, username, password, rePassword }),
  }).then((data) => {
    if (data.status === 201) {
      window.location.replace("/login");
    } else if (data.status === 500) {
      alert("Email already exists");
    } else {
      //
    }
  });
}

export { registration };