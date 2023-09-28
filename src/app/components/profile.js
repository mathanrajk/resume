"use client"
import React from 'react'
import classes from "./profile.module.css"
import { TypeAnimation } from 'react-type-animation';

function Profile() {
  return (
    <div className={classes.maincontainter}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76"  d="M0,288L40,250.7C80,213,160,139,240,106.7C320,75,400,85,480,85.3C560,85,640,75,720,90.7C800,107,880,149,960,165.3C1040,181,1120,171,1200,160C1280,149,1360,139,1400,133.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
<div className={classes.subcontainer}>
      <div className={classes.Profilecontainer}>
        <img src={"/mathan.png"} alt='mathanraj'/>
      </div>
      <div className={classes.rolename}>
        <div className={classes.typer}>
        <p className={classes.iamclass}>I am {" "}</p>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            ' React js developer',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            ' Next js developer',
            1000,
            ' React native developer',
            1000,

          ]}
          wrapper="span"
          speed={50}
          style={{  display: 'inline-block'}}
          repeat={Infinity}
          className={classes.typing}
        />
        </div>
     
      <div className={classes.rolenamecontent}><p>
      To Work in a healthy, innovative and challenging environment extracting the best out of me, which is conductive to learn and grown at professional as well as personal level thereby directing my future endeavors as an asset to the organization.
     </p> </div>
 </div>
 </div>
    </div>)
}

export default Profile