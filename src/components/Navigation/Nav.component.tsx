import React from 'react';
import navStyles from './Nav.module.css';
import Link from 'next/link';
function NavComponent() {
    return (
        <div className={navStyles.nav}>
            <h1>L&apos;Assiette</h1>
            <ul>
                <li>
                    <Link className={navStyles.link} href="/">Home</Link>
                </li>
                <li>
                    <Link className={navStyles.link} href="/menu">Menu</Link>
                </li>
                <li>
                    <Link className={navStyles.link} href="/rooms">Rooms</Link>
                </li>
                <li>
                    <Link className={navStyles.link} href="/conference-rooms">Conference Rooms</Link>
                </li>
                <li>
                    <Link className={navStyles.link} href="/dishes">Dishes</Link>
                </li>
                <li>
                    <Link className={navStyles.link} href="/contact">Contact</Link>
                </li>
                <li>
                    <Link className={navStyles.link} href="/auth">Login/Register</Link>
                </li>
                <li>
                    <Link className={navStyles.link} href="/cart">Cart</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavComponent;