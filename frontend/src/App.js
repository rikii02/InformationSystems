// src/App.js
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OwnersPage from './pages/OwnersPage'; 
import PropertiesPage from './pages/PropertiesPage';
import LeasesPage from './pages/LeasesPage';
import AccountingPage from './pages/AccountingPage';

function App() {
    return (
        <>
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/" exact Component={PropertiesPage} />
                <Route path="/owners" Component={OwnersPage} />
                <Route path="/leases" Component={LeasesPage} />
                <Route path="/accounting" Component={AccountingPage} />
            </Routes>
        </Router>
        </>
    );
}

export default App;
