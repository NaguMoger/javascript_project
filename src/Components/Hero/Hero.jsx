import React from 'react'
import './Hero.css'
import profile from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/final-1.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt=''/>
        <h1><span>I'm Alex Bennett,</span>Frontend developer base in USA.</h1>
        <p>create the visual and interactive elements of websites and applications, using web languages like HTML, CSS, and JavaScript</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero