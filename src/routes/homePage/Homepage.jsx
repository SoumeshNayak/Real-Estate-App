import React from 'react'
import "./homePage.scss"
import Searchbar from '../../components/Searchbar/Searchbar'
export default function Homepage() {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
        <h1 className='title'>Find Real Estate & Get Your Dream Place </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro nesciunt nisi aliquid consectetur 
        </p>
        <Searchbar/>
        <div className="boxes">
            <div className="box">
                <h1>16+</h1>
                <h2>Years Of Experiance</h2>
            </div>
            <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
            </div>
            <div className="box">
                <h1>1200+</h1>
                <h2>Property Ready</h2>
            </div>
        </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

