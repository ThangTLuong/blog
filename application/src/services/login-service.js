// const login = (state) => {
//   const { email, password } = state;

//   fetch("/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   }).then((data) => {
//     if (data.status === 200) {
//       window.location.replace("/");
//     } else if (data.status === 401) {
//       alert("The email or password is incorrect");
//       window.location.replace("/login");
//     } else {

//     }
//   })
// }

export default async function login(state) {
  const { email, password } = state;

  const res = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  switch (res.status) {
    case 200:
      window.location.replace("/");
      break;
    case 401:
      alert("The email or password is incorrect");
      window.location.replace("/login");
      break;
    default:
      alert("Internal Server Error");
      break;
  }
}
