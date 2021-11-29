import React from "react";
import signup from "../assests/ComponentCss/signup.module.css";
import { Link } from "react-router-dom";
export default function SignUp() {
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
						<span className={signup.spotify} style={{ color: "black" }}> Spotify</span>
					</div>
					<hr style={{ position: "relative", bottom: "0px", opacity: "0.5", color: "black" }} />
					<p className={signup.p1} style={{ color: "black" }}> Sign up for free to start listening.</p>

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
							top: "25px",
							opacity: "0.5",
							color:"black"
						}}
					/>
					<br />
					<p
						style={{
							fontFamily: "poppins",
							fontSize: "15px",
							fontWeight: "200",
							backgroundColor: "#fdf8fc",
							width: "25px",
							position: "relative",
							bottom: "12px",
							color:"black"
						}}
					>
						{" "}
						or{" "}
					</p>
					<br />
					<input
						type="text"
						className={signup.email}
						placeholder="First Name"
					/>
					<br />
					<input type="text" className={signup.email} placeholder="Last Name" />
					<br />
					<input
						type="Email"
						className={signup.email}
						placeholder="Email address "
					/>
					<br />
					<input
						type="password"
						className={signup.pwd}
						placeholder="Password"
					/>
					<br />
					<input
						type="password"
						className={signup.pwd}
						placeholder="Confirm Password"
					/>
					<br />
					{/* <button className={signup.login}>Login</button> */}
					<br />
					<br />
					<p className={signup.ppp}>Have an account? <Link to="/signin" className={signup.here}>  Sign In Here </Link></p>
					<button className={signup.login}>Sign Up Here</button>
				
               
					
				</center>
			</div>
		</>
	);
}
