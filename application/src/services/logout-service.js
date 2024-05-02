export default async function logout() {
  try {
    const res = await fetch("/logout");

    if (res !== 200) {
      throw new Error("There was an error logging out");
    }

    window.location.replace("/");
  } catch (err) {
    alert(err);
  }
}
