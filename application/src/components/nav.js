import React, { useEffect, useState } from 'react';

function Nav() {
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch("/session-check")
      .then((res) => {
        if (res.status === 200) {
          setAuth(true);
          res.json()
            .then((data) => {
              setUsername(data.username);
            });
        }
      });
  }, []);

  return (
    <nav id="navbar">
      <div className="nav-left">
        <a href="/">home</a>
      </div>
      <div className="nav-fill">
        <input className="form-control me-2 center-align" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success center-align nav-submit" type="submit">Search</button>
      </div>
      <div className="nav-right">
        {auth ?
        ( 
          <>
            <div id="upload" className="right-option">
              <a href="/upload">Upload</a>
            </div>
            <div id="profile" className="right-option">
              <a href="/profile">{username}</a>
            </div>
          </>
        ) : (
          <>
            <div id="register" className="right-option">
              <a href="/registration">Register</a>
            </div>
            <div id="log-in" className="right-option">
              <a href="/login">Log in</a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;