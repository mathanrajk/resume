"use client"
import React from 'react'
import classes from "./contactpage.module.css"
import Lottie from "lottie-react";
import loction from "../jsonanimation/location.json"
import call from "../jsonanimation/call.json"
import  mail from "../jsonanimation/mail.json"
import linkedin from "../jsonanimation/linkedin.json"
import whatsup from "../jsonanimation/whatsup.json"
import { DownloadOutlined } from '@ant-design/icons';
function ConactPage() {
  return (
    <div className={classes.maincontainer}>
        <div className={classes.subcontainer}> 
        <div className={classes.addandsocial}>
        <div className={classes.addresscontainer}> 
        <div className={classes.location}>
        <Lottie animationData={loction} loop={true}/>
        </div>
        <div className={classes.addresstag}>
          <h1 className={classes.address} >Address :</h1>
        <p >NO.2/334, Middle street,</p> 
        <p>Nettavelampatti(post),Thuraiyur (T.K), </p>
        <p> R.kombai, Trichy-621003.</p> 
        </div>
        </div>
        <div className={classes.socialmediacontainer}>
            <a href='tel:965-595-2592'>
        <div className={classes.iconcontainer}>
        <Lottie animationData={call} loop={true}/>
        </div></a>
        <a href="mailto:kmathan301@gmail.com">
        <div className={classes.iconcontainer}>
        <Lottie animationData={mail} loop={true}/>
        </div></a>
        <a href='https://www.linkedin.com/in/mathanraj-k-7891011b4/'>
        <div className={classes.iconcontainer}>
        <Lottie animationData={linkedin} loop={true}/>
        </div></a>
        <a href=' https://wa.me/9655952592'>
        <div className={classes.iconcontainer}>
        <Lottie animationData={whatsup} loop={true}/>
        </div>
        </a>
         </div>
        </div>
        <div className={classes.resumecontainer}><p>If you want download my resume</p> <a  href="Mathanraj Resume.pdf" download ={"mathanrajk"}> <button className={classes.link}>
        <DownloadOutlined /> Download
          </button> </a> </div>
        </div>
    </div>
  )
}

export default ConactPage