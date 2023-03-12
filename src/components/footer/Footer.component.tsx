import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { FaFacebookMessenger, FaLinkedin, FaInstagram, FaTwitter, FaPhoneAlt, FaLocationArrow  } from 'react-icons/fa';
import footerStyles from './Footer.module.css';
import Link from 'next/link';
function FooterComponent() {
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles["section"]}>
                <h3>ABOUT</h3>
                <p>
                    L&apos;Restaurant is a multi-visit destination for food
                    lovers in Nairobi.  Join us for
                    a memorable dining experience.and taste the essence of
                    France in Nairobi.
                </p>
                <div className={footerStyles.socialMedia}>
                    <Link style={{padding: '.3rem', fontSize: '20px', textAlign: 'center'}} href="https://facebook.com/"> <FaFacebookMessenger/> </Link>
                    <Link style={{padding: '.3rem', fontSize: '20px', textAlign: 'center'}} href="https://www.linkedin.com"> <FaLinkedin/> </Link>
                    <Link style={{padding: '.3rem', fontSize: '20px', textAlign: 'center'}} href="https://www.instagram.com"> <FaInstagram/> </Link>
                    <Link style={{padding: '.3rem', fontSize: '20px', textAlign: 'center'}} href="https://www.twitter.com"> <FaTwitter/> </Link>
                </div>
            </div>
            <div className={footerStyles["section"]}>
                <h3>Services</h3>
                <ul className={footerStyles.links}>
                    <li> <FaLocationArrow/> Home</li>
                    <li> <FaLocationArrow/>  About</li>
                    <li> <FaLocationArrow/> Services</li>
                    <li> <FaLocationArrow/>Blog</li>
                    <li> <FaLocationArrow/>Contact Us</li>
                </ul>
            </div>
            <div className={footerStyles["section"]}>
                <h3>About</h3>
                <ul className={footerStyles.links}>
                    <li> <FaLocationArrow/> Our Story</li>
                    <li> <FaLocationArrow/> Our Chefs</li>
                    <li> <FaLocationArrow/> Career</li>
                    <li> <FaLocationArrow/> Benefits</li>
                </ul>
            </div>
            <div className={footerStyles["section"]}>
                <h3>Contact Us</h3>
                <ul>
                    <li> <FaPhoneAlt/> +(254)-712-345-678</li>
                    <li>
                        <GoLocation/> Luxury hotel, #32841 block, #221DRS Rental & Paid
                        rooms business, UK.
                    </li>
                    <li > <AiOutlineMail style={{fontSize:'20px'}}/> email@gmail.com</li>
                </ul>
            </div>
        </div>
    );
}

export default FooterComponent;