import { useState, useEffect } from "react";

export default function useFetch(url, method = "GET", body = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = {
          method,
          headers: { "Content-Type": "application/json" },
        };
        const res = await fetch(url, query);
        const fetchedData = await res.json();
        setData(fetchedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
