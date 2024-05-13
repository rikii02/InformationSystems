// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OwnersPage from './pages/OwnersPage'; 
import PropertiesPage from './pages/PropertiesPage';
import LeasesPage from './pages/LeasesPage';
import AccountingPage from './pages/ServicePage';
import ServicePage from './pages/ServicePage';

function App() {
    return (
        <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact Component={PropertiesPage} />
                <Route path="/owners" Component={OwnersPage} />
                <Route path="/leases" Component={LeasesPage} />
                <Route path="/services" Component={ServicePage} />
            </Routes>
        </Router>
        </>
    );
}

export default App;
