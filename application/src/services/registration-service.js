// const registration = (state) => {
//   const { email, username, password, rePassword } = state;

//   fetch("/registration", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, username, password, rePassword }),
//   }).then((data) => {
//     if (data.status === 201) {
//       window.location.replace("/login");
//     } else if (data.status === 409) {
//       alert("Email already exists");
//     } else if (data.status === 500){
//       //
//     }
//   });
// }

export default async function registration(state) {
  const { email, username, password, rePassword } = state;

  const res = await fetch("/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, username, password, rePassword }),
  });

  switch (res.status) {
    case 201:
      window.location.replace("/login");
      break;
    case 409:
      alert("Email already exists");
      break;
    default:
      alert("Internal Server Error");
      break;
  }
}
