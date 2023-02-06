import React from 'react';
import Image from 'next/image';
import footerStyles from './Footer.module.css';
import Link from 'next/link';
function FooterComponent() {
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles["section"]}>
                <h3>ABOUT</h3>
                <p>
                    L&apos;Restaurant is a multi-visit destination for food
                    lovers in Nairobi. From rich nd creamy saucses to perfectly
                    roasted meats, every dish is crafted wit carre and
                    precision, using only the freshest ingredients. Join us for
                    a memorable dining experience.and taste the essence of
                    France in Nairobi.
                </p>
                <div className={footerStyles.socialMedia}>
                    <Link
                        className={footerStyles.facebook}
                        href="https://facebook.com/"
                    ></Link>
                    <Link href="https://www.linkedin.com"></Link>
                    <Link href="https://www.instagram.com"></Link>
                    <Link href="https://www.twitter.com"></Link>
                </div>
            </div>
            <div className={footerStyles["section"]}>
                <h3>Services</h3>
                <ul className={footerStyles.links}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className={footerStyles["section"]}>
                <h3>Contact Us</h3>
                <ul>
                    <li> 📞+(254)-712-345-678</li>
                    <li>
                        &#64; Luxury hotel, #32841 block, #221DRS Rental & Paid
                        rooms business, UK.
                    </li>
                    <li> ✉ email@gmail.com</li>
                </ul>
            </div>
        </div>
    );
}

export default FooterComponent;