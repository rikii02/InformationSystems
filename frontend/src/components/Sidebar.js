// src/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../styles/Navbar.css';
import { IconContext} from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar= () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className='sideBar'>
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
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

export default Sidebar;