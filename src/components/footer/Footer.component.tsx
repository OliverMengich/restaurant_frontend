import React from 'react';
import Image from 'next/image';
import footerStyles from './Footer.module.css';
function FooterComponent() {
    return (
        <div className={footerStyles.footer}>
            
            <div className={footerStyles["section"]}>
                <h3>Useful Links</h3>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Conference Rooms</li>
                    <li>Blog</li>
                    <li>Login/Register</li>
                </ul>
            </div>
            <div className={footerStyles["section"]}>
                <h3>Services</h3>
                <ul>
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
                    <li>
                        <Image
                            src="/call1.png"
                            alt="youtube"
                            width={30}
                            height={30}
                        />
                        +(254)-712-345-678
                    </li>
                    <li>
                        <Image
                            src="/location.png"
                            alt="location"
                            width={30}
                            height={30}
                        />
                        Luxury hotel, #32841 block, #221DRS Rental & Paid rooms
                        business, UK.
                    </li>
                    <li>
                        <Image
                            src="/send.png"
                            alt="youtube"
                            width={30}
                            height={30}
                        />
                        email@gmail.com
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default FooterComponent;