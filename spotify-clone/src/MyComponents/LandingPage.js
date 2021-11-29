import React from "react";
import "../assests/ComponentCss/landingpage.css";
import NavBar from "./NavBar";
export default function LandingPage() {
  return (
    <> 
    <NavBar/>
      <section id="home">
        <div className="container">
          <div className="row justify-content-left">
            <div className="col-md-20 mt-5">
              <div className="col-md-20 mt-5">
                <div className="col-md-20 mt-5">
                  <h1 className="display-4 fw-bolder mt-30 mb-4 text-left">
                    Feel the Fresh Music...
                  </h1>
                  <p container="lead text-center fs-4 mb-5">something...</p>
                  <div className="buttons d-flex justify-content-center">
                    <button className="btn btn-light me-4  rounded-pill px-4 py-2">
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
