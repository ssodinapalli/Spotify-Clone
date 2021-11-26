import React from "react";
import signup from "../assests/ComponentCss/signin.module.css";
export default function SignIn() {
  return (
    <>
      <div className={signup.bdy}>
        <center>
          <div className={signup.maincontainer}>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/spotify.png"
              alt="/"
              className={signup.spotifylogo}
            />
            <span className={signup.spotify}> Spotify</span>
          </div>
          <hr style={{ position: "relative", bottom: "0px", opacity: "0.5" }} />
          <p className={signup.p1}>To continue, Sign In To Spotify.</p>
          <div className={signup.divfb}>
            <center style={{ position: "relative", top: "11px" }}>
              CONTINUE WITH FACEBOOK
            </center>
          </div>
          <div className={signup.divapple}>
            <center style={{ position: "relative", top: "11px" }}>
              CONTINUE WITH APPLE
            </center>
          </div>
          <div className={signup.divnum}>
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
            className={signup.email}
            placeholder="Email adress or Username"
          />
          <br />
          <input
            type="password"
            className={signup.pwd}
            placeholder="Password"
          />

          <div className={signup.rmbrbttn}></div>
          <p className={signup.rmbr}>Remember me</p>

          <button className={signup.login}>Login</button>

          <hr
            style={{
              width: "400px",
              position: "relative",
              bottom: "60px",
              opacity: "0.5",
            }}
          />

          <p className={signup.ppp}>You do not have an account?</p>

          <div className={signup.divlog}>
            <center style={{ position: "relative", top: "11px" }}>
              Create new account from here
            </center>
          </div>
        </center>
      </div>
    </>
  );
}
