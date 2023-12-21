import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Services from './pages/ServicesPage'
import Projects from './pages/ProjectsPage'
import Header from './components/header/Header'
import './index.css';

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/Projects" element={<Projects />} />
                </Routes>
            </Router>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
