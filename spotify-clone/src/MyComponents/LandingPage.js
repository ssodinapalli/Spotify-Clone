import React from "react";
import "../assests/ComponentCss/landingpage.css";
import heads from '../assests/images/heads.jpeg'
export default function LandingPage() {
  return (
    <> 
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div class="container" id="navbar">
        <a class="navbar-brand fw-bolder fs-4 " href="/">
        <i className="fab fa-spotify"></i> Spotify
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0   mx-lg-auto">
            <li class="nav-item mx-2" >
              <a class="nav-link active  " aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="/">
                Premium
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="/">
                Support
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="/">
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
        </div>
      </div>
    </nav>
      <section id="home">
        <div className="container">
          <div className="row justify-content-left">
            <div className="col-md-20 mt-5">
              <div className="col-md-20 mt-5">
                <div className="col-md-20 mt-5">
                  <h1 className="display-4 fw-bolder mt-30 mb-4 text-left">
                    Feel the Fresh Music...
                  </h1>
                  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/mobile-music-player-4521061-3755278.png" alt="img" srcset="" className="head"/>
                  <div className="buttons d-flex justify-content-center">
                    <button className="btn btn-light mx-5 me-4  rounded-pill px-4 py-2">
                      Download App Now{" "}
                    </button>
                    <button className="btn btn-outline-light me-4 rounded-pill px-4 py-2">
                      Open Web Player{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
