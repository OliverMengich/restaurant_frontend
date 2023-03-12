import NavComponent from '../Navigation/Nav.component';
import React, {useState} from 'react';
import './Layout.module.css';
import bg from '../../assets/img.png';
type Props = {
    children: React.ReactNode;
}
const Layout = ( {children}: Props ) => {
    const [isOpen,setIsOpen] = useState(false);
    function changeIsOpen() {
        setIsOpen(!isOpen)
    }
    return (
        <div className="wrapper" style={{ backgroundImage: `url(${bg.src})`, width: '100vw',overflowY:'scroll',overflowX:'hidden', height: '100vh' }}>
            <NavComponent isOpen={isOpen} changeIsOpen={changeIsOpen} />
            {children}
        </div>
    )
}
export default Layout;