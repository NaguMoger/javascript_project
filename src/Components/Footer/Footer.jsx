import React from 'react'
import './Footer.css'
import footer from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/footer_logo.svg'
import user from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-left">
                <img src={footer} alt="" />
                <p>A portfolio website is a curated online space that showcases your best work.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">&copy; 2024 YourWebsiteName. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer