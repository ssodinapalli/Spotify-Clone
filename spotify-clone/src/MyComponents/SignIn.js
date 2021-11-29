import React from "react";
import signin from "../assests/ComponentCss/signin.module.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <div className={signin.bdy}>
        <center>
          <div className={signin.maincontainer}>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/spotify.png"
              alt="/"
              className={signin.spotifylogo}
            />
            <span className={signin.spotify}> Spotify</span>
          </div>
          <hr style={{ position: "relative", bottom: "0px", opacity: "0.5" }} />
          <p className={signin.p1}>To continue, Sign In To Spotify.</p>
          <div className={signin.divfb}>
            <center style={{ position: "relative", top: "11px" }}>
              CONTINUE WITH FACEBOOK
            </center>
          </div>
          <div className={signin.divapple}>
            <center style={{ position: "relative", top: "11px" }}>
              CONTINUE WITH APPLE
            </center>
          </div>
          <div className={signin.divnum}>
            <center style={{ position: "relative", top: "11px" }}>
              CONTINUE WITH A PHONE NUMBER
            </center>
          </div>
          <hr
            style={{
              width: "400px",
              position: "relative",
              top: "25px",
              opacity: "0.5",
            }}
          />
          <p
            style={{
              fontFamily: "poppins",
              fontSize: "15px",
              fontWeight: "200",
              backgroundColor: "#fdf8fc",
              width: "25px",
              position: "relative",
              bottom: "5px",
            }}
          >
            {" "}
            or{" "}
          </p>
          <input
            type="text"
            className={signin.email}
            placeholder="Email adress or Username"
          />
          <br />
          <input
            type="password"
            className={signin.pwd}
            placeholder="Password"
          />

          <div className={signin.rmbrbttn}></div>
          <p className={signin.rmbr}>Remember me</p>

          <button className={signin.login}>Login</button>

          <hr
            style={{
              width: "400px",
              position: "relative",
              bottom: "60px",
              opacity: "0.5",
            }}
          />

          <p className={signin.ppp}>You do not have an account?</p>

          <div className={signin.divlog}>
            <center style={{ position: "relative", top: "11px" }}>
              <Link to="signup" className={signin.routerpara}><p >Create Account From Here</p></Link>
            </center>
          </div>
        </center>
      </div>
    </>
  );
}
