"use client"
import React from 'react'
import classes from "./workingpage.module.css"
import Lottie from "lottie-react";
import worker from "../jsonanimation/worker.json"
import Tabledata from './tabledata';
function WorkingPage() {
  return (
    <div className={classes.maincontainer}>
        <div className={classes.titlecard}>Experience profile</div>
        <div className={classes.subcontainer}>
            <div className={classes.imagecontainer}>
<Lottie animationData={worker} loop={true}/>
            </div>
            <div className={classes.detailcontainer}>
                <Tabledata/>
            </div>
        </div>
    </div>
  )
}

export default WorkingPage