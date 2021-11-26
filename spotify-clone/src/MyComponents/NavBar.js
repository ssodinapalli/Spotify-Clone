import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <ul className="list">
          <li className="brand">
            <i className="fab fa-spotify"></i> Spotify
          </li>
          <li className="list">Premium</li>
          <li className="list">Download</li>
          <li className="list">Listen</li>
          <li className="list-one"> |</li>
          <li className="list">Log in</li>
          <li className="list">Sign up</li>
        </ul>
      </nav>
    </>
  );
}
