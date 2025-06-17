import React from 'react'
import './Contact.css'
import theam_pattern from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/theme_pattern.svg'
import mail from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/mail_icon.svg'
import call from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/call_icon.svg'
import location from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/location_icon.svg'

const Contact = () => {
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theam_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>The place on a mobile device or computer where people's names and phone numbers are stored.</p>
                    <div className="contact-details">
                        <div className="contact-detailes">
                            <img src={mail} alt="" /> <p>abcd@gmail.com</p>
                        </div>
                        <div className="contact-detailes">
                            <img src={call} alt="" /> <p>+980-345-908</p>
                        </div>
                        <div className="contact-detailes">
                            <img src={location} alt="" /> <p>CA, United States</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contect-submit">Submit now</button>
                </form>
            </div>
        </div>

    )
}

export default Contact