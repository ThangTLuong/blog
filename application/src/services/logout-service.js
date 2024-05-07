export default async function logout() {
  try {
    await fetch("/logout");
    window.location.replace("/");
  } catch (err) {
    console.log(err);
    alert(err);
  }
}
