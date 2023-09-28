import React from 'react'
import Header from './header';
import classes from "./homepage.module.css"
import Profile from './profile';
import EductionPage from './educationpage';
import WorkingPage from './workingpage';
import ConactPage from './contactpage';

function Homepage() {
  return (
    <>
   
        <Header/>
         <div className={classes.mainbody}>
        <div className={classes.profilepage} id='profile'>
            <Profile/>
        </div>
        <div className={classes.educationpage} id="education">
          <EductionPage/>
        </div>
        <div className={classes.workingpage} id='working'>
          <WorkingPage/>
        </div>
        <div className={classes.contantpage} id='contact'>
        <ConactPage/>
        </div>
    </div>
    </>
  )
}

export default Homepage;