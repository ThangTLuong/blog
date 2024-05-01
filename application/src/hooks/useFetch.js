export default async function useFetch(link, head, body) {
  const { method } = link;
  let res;

  if (!method) {
    return new Error("A method was not declared.");
  }

  try {
    if (method === "GET") {
      res = await fetch(link, head);
    } else {
      res = await fetch(link, head, body);
    }
  } catch (err) {
    return new Error(err);
  }

  return res;
}
