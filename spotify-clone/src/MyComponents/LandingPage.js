import React from "react";
import "../assests/ComponentCss/landingpage.css";


export default function LandingPage() {
  return (
    <> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container" id="navbar">
        <a className="navbar-brand fw-bolder fs-4 " href="/">
        <i className="fab fa-spotify"></i> Spotify
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0   mx-lg-auto">
            <li className="nav-item mx-2" >
              <a className="nav-link active  " aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="/">
                Premium
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="/">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="/">
                Download
              </a>
            </li>
          </ul>
          <button className="btn btn-outline-success ms-auto px-4 rounded-pill">
            <i className="fa fa-sign-in-alt me-2 "></i>
            <a className="explore" href="/signin">Sign In</a>
          </button>
          <button className="btn btn-outline-success ms-2 px-4 rounded-pill">
            <i className="fa fa-user-plus me-2"></i>
            <a className="explore" href="/signup">Sign Up</a>
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
