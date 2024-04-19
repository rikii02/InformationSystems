// src/App.js
import React, { useState } from 'react';
import MenuButton from './components/MenuButton';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="app">
            <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <Sidebar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
            <div className="content" onClick={closeMenu}>
                <h1>DreamHome</h1>
            </div>
        </div>
    );
}

export default App;
