"use client"
import React,{useState} from 'react'
import classes from "./header.module.css"
import {
MenuOutlined,CloseOutlined} from '@ant-design/icons'
import { Tooltip } from 'antd';
function Header() {
const [isopen,setisopen]=useState(false)

function menuhandler(){
  if(!isopen){
    var cmenu = document.getElementById("cmenu")
    cmenu.style.display="block";

    setisopen(true)
  }
  else{
    var cmenu = document.getElementById("cmenu")
    cmenu.style.display="none";
    setisopen(false)
  }

}

  return (
    <div className={classes.maincontainer}>
      <div className={classes.profilename}>
        <Tooltip  title="Mathanraj K">
        <div className={classes.imagecontainer}>
          <img src={"/mathan.png"} alt='mathanraj' />

        </div></Tooltip>
        <p>Mathanraj K</p></div>
      <div className={classes.navcontainer}id="cmenu">
        <nav >
          <ul>
            <li><a href='#profile'>Profile</a></li>
            <li><a href='#education'>Education</a></li>
            <li><a href='#working'>Experience</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className={classes.menu}   id="menubar"
        onClick={menuhandler}
        >{
          !isopen ?<MenuOutlined /> :<CloseOutlined />
        }</div>
    </div>
  )
}

export default Header