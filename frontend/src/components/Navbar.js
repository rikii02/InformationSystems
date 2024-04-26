import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../styles/Navbar.css';
import { IconContext} from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar= () => setSidebar(!sidebar);

    const handleLinkClick = () => {
        setSidebar(false); // Cierra la barra lateral cuando se hace clic en un enlace
    };

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className='navbar'>
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <div className='company-name'>DreamHome</div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={handleLinkClick}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </Link>
                       
                    </li>
                    {SidebarData.map((item, idex) => {
                        return (
                            <li className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    </>
  );
}

export default Navbar;