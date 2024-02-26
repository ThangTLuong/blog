import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const navigate = useNavigate();
  const [Auth, setAuth] = useState(false);

  useEffect(() => {
    const page = window.location.pathname;
    let isMounted = true;
    fetch(page)
      .then((res) => {
        if (!isMounted) return;
        if (res.status === 401) {
          setAuth(false);
          // alert("Permission Denied\nPlease log in");
          navigate("/");
        } else {
          setAuth(true);
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
        setAuth(false);
        navigate("/");
      });
    return () => {
      isMounted = false;
    };
  }, [navigate]);

  if (!Auth) {
    return null;
  }

  return <Component {...rest} />;
}

export default ProtectedRoute;