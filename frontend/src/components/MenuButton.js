import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/MenuButton.css';

function MenuButton({ isMenuOpen, toggleMenu }) {
    return (
        <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
        </button>
    );
}

export default MenuButton;
