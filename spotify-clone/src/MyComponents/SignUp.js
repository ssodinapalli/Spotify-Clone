import React from "react";
import signup from "../assests/ComponentCss/signup.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; //connecting between hookform and yup
import { schema } from "../Helpher/FormSchema";
import postUserData from "../Helpher/AxiosHelpher";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitformData = (data) => {
    reset();
    alert("Registered Successfully");
    window.location.href = "http://localhost:3000/signin";
  };

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
            <p className={signup.spotify} style={{ color: "black" }}>
              {" "}
              Spotify
            </p>
          </div>
          <hr
            style={{
              position: "relative",
              bottom: "7px",
              opacity: "0.5",
              color: "black",
            }}
          />
          <p className={signup.p1} style={{ color: "black" }}>
            {" "}
            Sign up for free to start listening.
          </p>

          <div className={signup.divfb}>
            <center style={{ position: "relative", top: "11px" }}>
              SIGNUP WITH FACEBOOK
            </center>
          </div>

          <div className={signup.divnum}>
            <center style={{ position: "relative", top: "11px" }}>
              SIGNUP WITH A PHONE NUMBER
            </center>
          </div>
          <hr
            style={{
              width: "400px",
              position: "relative",
              top: "0px",
              opacity: "0.5",
              color: "black",
            }}
          />
          <br />
          <p
            style={{
              fontFamily: "poppins",
              fontSize: "15px",
              fontWeight: "200",
              width: "10px",
              position: "relative",
              bottom: "30px",
              color: "black",
            }}
          >
            {" "}
            or{" "}
          </p>

          {/* main form */}
          <div className={signup.name}>
            <div className="inputs">
              <form onSubmit={handleSubmit(submitformData)}>
                <input
                  name="firstName"
                  id="firstName"
                  type="text"
                  className={signup.email}
                  {...register("firstName")}
                  placeholder="First Name"
                />{" "}
                <p className={signup.errormsg}>
                  {errors.firstName && "Invalid Firstname*"}
                </p>
                <input
                  name="lastName"
                  id="lastName"
                  type="text"
                  className={signup.email}
                  {...register("lastName")}
                  placeholder="Last Name"
                />
                <p className={signup.errormsg}>
                  {errors.lastName && "Invalid Lastname*"}
                </p>
                <input
                  name="email"
                  id="email"
                  type="Email"
                  className={signup.email}
                  {...register("email")}
                  placeholder="Email address "
                />
                <p className={signup.errormsg}>
                  {errors.email && "Invalid Email"}
                </p>
                <input
                  name="password"
                  id="password"
                  type="password"
                  className={signup.pwd}
                  {...register("password")}
                  placeholder="Password"
                />
                <p className={signup.errormsg}>{errors.password?.message}</p>
                <input
                  name="confirmPassword"
                  id="confirmPassword"
                  type="password"
                  className={signup.pwd}
                  {...register("confirmPassword")}
                  placeholder="Confirm Password"
                />
                <p className={signup.errormsg}>
                  {errors.confirmPassword && "Password Should Match*"}
                </p>
                <p className={signup.ppp}>
                  Have an account?{" "}
                  <Link to="/signin" className={signup.here}>
                    {" "}
                    Sign In Here{" "}
                  </Link>
                </p>
                <button
                  className={signup.login}
                  type="submit"
                  onClick={postUserData}
                >
                  Sign Up Here
                </button>
              </form>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}
