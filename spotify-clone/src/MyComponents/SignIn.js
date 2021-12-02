import { React, useState } from "react";
import signin from "../assests/ComponentCss/signin.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name , value)
    setUser({
      ...user,
      [name]: value,
    });
  };

  const RegisterUser = () => {
    axios
      .post("http://localhost:9000/login", user)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {console.log("user", user)}
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
              width: "25px",
              position: "relative",
              bottom: "14px",
            }}
          >
            {" "}
            or{" "}
          </p>
          {/* form */}
          <form action="/login" method="post">
            <input
              id="email"
              name="email"
              type="text"
              value={user.email}
              onChange={handleChange}
              className={signin.email}
              placeholder="Email Address"
              required
            />
            <br />
            <input
              id="password"
              name="password"
              type="password"
              value={user.value}
              onChange={handleChange}
              className={signin.pwd}
              placeholder="Password"
              required
            />
          </form>

          <button className={signin.login} onClick={RegisterUser}>
            Login
          </button>

          <p className={signin.ppp}>You do not have an account?</p>

          <div className={signin.divlog}>
            <center style={{ position: "relative", top: "11px" }}>
              <Link to="signup" className={signin.routerpara}>
                <p>Create Account From Here</p>
              </Link>
            </center>
          </div>
        </center>
      </div>
    </>
  );
}
