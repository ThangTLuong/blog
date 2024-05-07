export default async function fetchSessions() {
  const res = await fetch("/sessions", {
    method: "GET",
  });

  if (res.status === 200) {
    const data = await res.json();
    return { auth: true, username: data.username };
  }

  return { auth: false, username: "" };
}
