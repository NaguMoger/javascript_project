import React from 'react'
import './Services.css'
import pattern from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/theme_pattern.svg'
import service_data from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/services_data.js'
import arrow_icon from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={pattern} alt="" />
        </div>
        <div className="services-container">
            {service_data.map((service,index)=>{
                return <div key={index} className='servives-formate'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services