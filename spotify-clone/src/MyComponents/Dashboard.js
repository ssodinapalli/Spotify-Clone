import React from "react";
import "../assests/ComponentCss/Dashboardd.css";
import Cards from "./Cards";





function Dashboard() {
  return (
      <div class="wrapper">
        <div class="sidebar">
        <a className="navbar-brand fw-bolder fs-4 " href="/">
          <i className="fab fa-spotify"></i> Spotify
        </a>
          <ul>
            <li>
              <a href="#">
                <i class="fas fa-home"></i>Home
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-user"></i>Profile
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-address-card"></i>About
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-project-diagram"></i>portfolio
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-blog"></i>Blogs
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-address-book"></i>Contact
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-map-pin"></i>Map
              </a>
            </li>
          </ul>
          <div class="social_media">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="main_content">
          <div class="header">Welcome!! Have a nice day.</div>
          <div class="boxcards">

            <Cards/>


           
          </div>
        </div>
      </div>
  );
}

export default Dashboard;
