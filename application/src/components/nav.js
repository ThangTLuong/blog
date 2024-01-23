import React, { useEffect, useState } from 'react';

const Nav = () => {
  const [auth, setAuth] = useState(() => {
    return false;
  });
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch("/session-check")
      .then((res) => {
        if (res.status === 200) {
          setAuth(true);
          res.json()
            .then((data) => {
              setUsername(data);
            });
        }
      });
  }, [auth]);

  const handleLogout = () => {
    fetch("/logout")
      .then((res) => {
        window.location.replace("/");
      })
      .catch((err) => {
        //
      });
  }

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
            <div id="profile" className='right-option'>
              <div className="btn-group !h-2/4 d-flex w-20 center justify-center border-radius-5">
                <button type="button" className="btn btn-danger dropdown-toggle">{username}</button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item leading-8" href={`/profile/${username}`}>Profile</a></li>
                  <li><a className="dropdown-item leading-8" href="/settings">Settings</a></li>
                  <li><hr className="dropdown-divider my-1" /></li>
                  <li><a className="dropdown-item leading-8" href="/" onClick={handleLogout}>Logout</a></li>
                </ul>
              </div>
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