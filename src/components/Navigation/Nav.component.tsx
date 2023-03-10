import React from 'react';
import navStyles from './Nav.module.css';
import Link from 'next/link';
type NavProps={
    changeIsOpen: ()=>void,
    isOpen: boolean
}
function NavComponent({changeIsOpen, isOpen}: NavProps) {
    return (
        <div className={navStyles.nav}>
            <h1>L&apos;Assiette</h1>
            <ul style={!isOpen?{display:'flex'}:{display: 'none'}}>
                <li>
                    <Link className={navStyles.link} href="/">Home</Link>
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
                    <button className={navStyles.selected} >Login/Register</button>
                </li>
                <li>
                    <button className={navStyles.cart}>Cart</button>
                </li>
            </ul>
            <p onClick={changeIsOpen} className={navStyles.bars}>&#x2630;</p>
        </div>
    );
}

export default NavComponent;