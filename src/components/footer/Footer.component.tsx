import React from 'react';
import Image from 'next/image';
import footerStyles from './Footer.module.css';
function FooterComponent() {
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles["section"]}>
                <Image src="/chef.png" alt="logo" width={100} height={100} />
                <p style={{ fontSize: "20px" }}>
                    Come taste the best Friench dishes from Quiche Lorraine,
                    Salmon en papillote Prepared by{" "}
                    <span style={{ color: "yellow" }}>
                        Chef Hélène Darrozet
                    </span>
                    ,<span style={{ color: "yellow" }}>Anne-Sophie Pic</span>{" "}
                    and Many More
                </p>
                {/* social media as */}
                <div className={footerStyles.socialMedia}>
                    <a href="https://www.facebook.com/">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                            alt="facebook"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href="https://www.instagram.com/">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                            alt="instagram"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href="https://www.twitter.com/">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                            alt="twitter"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a>
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                            alt="youtube"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
            </div>
            <div className={footerStyles["section"]}>
                <h3>Quick as</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={footerStyles["section"]}>
                <h3>Services</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default FooterComponent;