import React from "react";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div class="container" id="navbar">
        <a class="navbar-brand fw-bolder fs-4 " href="/">
          Spotify
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Premium
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Support
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Download
              </a>
            </li>
          </ul>
          <button className="btn btn-outline-success ms-auto px-4 rounded-pill">
            <i className="fa fa-sign-in-alt me-2 "></i>
            Login
          </button>
          <button className="btn btn-outline-success ms-2 px-4 rounded-pill">
            <i className="fa fa-user-plus me-2"></i>
            Sign Up
          </button>

          {/* <form class="d-flex"> 
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success br-4" type="submit">
                Search
              </button>
            </form> */}

          {/* <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
        </div>
      </div>
    </nav>
  );
}



