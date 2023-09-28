import React from 'react'
import classes from "./educatonpage.module.css"
import{educationData} from "./educationDetails" 
import EducationCard from './educationcard'

function EductionPage() {
  return (
    <div className={classes.maincontainer}>
      <div className={classes.titlecard}>ACADEMIC PROFILE</div>
        <div className={classes.subcontainer}>
            {
                educationData.map((data,index)=>{
                    return <EducationCard key ={index} title ={data.title} image= {data.image} details={data.details} department={data.department} passingyear={data.passingyear} percentage={data.percentage}/>
                })
            }
        </div>
    </div>
  )
}

export default EductionPage