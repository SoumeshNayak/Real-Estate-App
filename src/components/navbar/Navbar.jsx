import React, { useState } from 'react'
import "./navbar.scss"
export default function Navbar() {

  const [open,setOpen]=useState(false)
  return (
    <nav>
        <div className="left">
          <a href='/' className='logo'>
            <img src="/logo.png" alt="" />
            <span>UNEstate</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Others</a>
        </div>
        <div className="right">
          <a href="/">SignIn</a>
          <a href="/" className='register'>SignUp</a>

          <div className="menuIcon">
            <img src="/menu.png" alt="" onClick={
              ()=>setOpen(!open)
            }/>
          </div>
          <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Others</a>
          <a href="/">SignIn</a>
          <a href="/">SignUp</a>
          </div>
        </div>
    </nav>
  )
}
