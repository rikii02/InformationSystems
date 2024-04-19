// src/Sidebar.js
import React from 'react';
import '../styles/Sidebar.css';


function Sidebar({ isMenuOpen, closeMenu }) {
    return (
        <div className={`sidebar ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}>
            <h2>Menu</h2>
            <ul>
                <li>Owners</li>
                <li>Properties</li>
                <li>Leases</li>
                <li>Accounting</li>
            </ul>
        </div>
    );
}

export default Sidebar;
