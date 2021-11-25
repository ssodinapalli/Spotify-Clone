import React from 'react'
export default function LandingPage() {
    return (
        <>
        <nav className="navbar">
    <ul>
        <li className="brand"><i className="fab fa-spotify"></i>Spotify</li>
        <li>Premium</li>
        <li>Download</li>
        <li>Listen</li> 
        <li className="list-one"> |</li>
        <li>Log in</li>
        <li>Sign up</li>
    </ul>
 </nav>
 <div className="marsh">
    <img src="https://i.postimg.cc/pLnnqwzC/pic.png" alt="" />
 </div>
 <div className="headcontent">
    Feel the Music <i className="fas fa-music"></i>
 </div>
 <div className="content">
    <em>Music and Rythmn find their <br/> way into the secret places <br/>  of the soul..</em> 
 </div>
 <div className="button"><a href="/" className="join">Join Now</a></div>
    
        </>
    )
}
