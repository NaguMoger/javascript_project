import React from 'react'
import './About.css'
import dinal from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/final-2.jpeg'
import nav from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/theme_pattern.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={nav} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={dinal} alt="" style={{ height: "273px", width: "378px" }} />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>create the visual and interactive elements of websites and applications, using web languages like HTML, CSS, and JavaScript</p>
                        <p>create the visual and interactive elements of websites and applications, using web languages like HTML, CSS, and JavaScript</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React Js</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Next Js</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achivements">
                <div className="avout-achivement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="avout-achivement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="avout-achivement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About