import React from "react";
import "../assests/ComponentCss/landingpage.css";
import NavBar from "./NavBar";
export default function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="maincontainer">
        <div className="marsh">
          <img src="https://i.postimg.cc/pLnnqwzC/pic.png" alt="" />
        </div>
        <div className="headcontent">
          Feel the Music <i className="fas fa-music"></i>
        </div>
        <div className="content">
          <em>
            Music and Rythmn find their <br /> way into the secret places <br />{" "}
            of the soul..
          </em>
        </div>
        <div className="button">
          <a href="/" className="join">
            Join Now
          </a>
        </div>
      </div>
    </>
  );
}
