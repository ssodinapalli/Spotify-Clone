import React from 'react'
import '../assests/ComponentCss/signin.css'
export default function SignIn() {
    return (
        <>

<div class="bdy">
<center>	
	<img class="logo" src="https://www.upload.ee/image/13240330/logo.png" alt="logo" />
	
	<hr style={{position:"relative" ,  bottom:"0px" , opacity:"0.5"}} />

	<p class="p1">To continue, sign in to OPSound.</p>

	<div class="divfb" >
		<center style={{position:"relative" , top:"11px"}}>

			CONTINUE WITH FACEBOOK
		</center> 
    </div>

	<div class="divapple" >
	<center style={{position:"relative" ,top:"11px" }} >
			CONTINUE WITH APPLE
		</center> 		
</div>
	<div class="divnum" >
		<center style={{position:"relative", top:"11px"}}>
			CONTINUE WITH A PHONE NUMBER
		</center> 	
	</div>

	<hr style={{width:"400px" , position:"relative" ,top:"25px" ,opacity:"0.5"}}/>
	<p style={{fontFamily:"poppins" ,  fontSize:"15px" , fontWeight:"200" ,backgroundColor:"#fdf8fc" , width:"25px" ,position:"relative" , bottom:"5px" }}> or </p>
	<input type="text" class="email" placeholder="Email adress or Username" />
	<br />
	<input type="password" class="pwd" placeholder="Password" />

	<div class="rmbrbttn"></div>
	<p class="rmbr">Remember me</p>

	<button class="login">Login</button>

	<hr style={{width:"400px" , position:"relative" , bottom:"60px" ,opacity:"0.5"}} />

	<p class="ppp">You do not have an account?</p>

	<div class="divlog">
		<center style={{position:"relative" ,top:"11px"}}>
	Create new account from here
		</center>
	</div>
</center>
</div>
        </>
    )
}
