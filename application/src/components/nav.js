import React, { useEffect, useState } from 'react';

function Nav() {
  const [auth, setAuth] = useState(false);

  return (
    <nav id="navbar">
      <div class="nav-left">
        <a href="/">home</a>
      </div>
      <div class="nav-fill">
        <input class="form-control me-2 center-align" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success center-align nav-submit" type="submit">Search</button>
      </div>
      <div class="nav-right">
        {auth ?
        ( 
          <>
            <div id="upload" class="right-option">
              <a href="/upload">Upload</a>
            </div>
            <div id="profile" class="right-option">
              <a href="/profile">Profile</a>
            </div>
          </>
        ) : (
          <>
            <div id="register" class="right-option">
              <a href="/registration">Register</a>
            </div>
            <div id="log-in" class="right-option">
              <a href="/login">Log in</a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;