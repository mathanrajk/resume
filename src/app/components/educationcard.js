"use client"
import React from 'react'
import classes from "./educationcard.module.css"
import { Progress} from 'antd';
import Lottie from "lottie-react";

function EducationCard(props) {
    const { title,image,details,department,passingyear,percentage}=props;
  return (
    <div className={classes.maincard} >
    <div className={classes.title}>{title}</div>
    <div className={classes.imagecontainer}>
        
        <Lottie animationData={image} loop={true}/>
       
    </div>
    <div className={classes.schoolnamecontainer}>
    {details}
    </div>
    <div className={classes.departmentcontainer}>{department}</div>
    <div className={classes.passingyearcontainer}>{passingyear}</div>
    <div className={classes.Progressbar}>
        <div className={classes.innerprogressbar}>
    <Progress percent={percentage}  status="active" /></div></div>

     </div>

  )
}

export default EducationCard