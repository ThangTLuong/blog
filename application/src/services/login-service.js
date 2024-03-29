const login = (state) => {
  const { email, password } = state;

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((data) => {
    if (data.status === 200) {
      window.location.replace("/");
    } else if (data.status === 401) {
      alert("The email or password is incorrect");
      window.location.replace("/login");
    } else {
      
    }
  })
}

export { login };