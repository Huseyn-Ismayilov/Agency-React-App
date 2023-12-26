import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css'

const Header = () => {
    const menuLinks = [
        { text: "Home", to: "/" },
        { text: "Projects", to: "/projects" },
        { text: "Services", to: "/Services" },
        { text: "About", to: "/About" },
    ]
    return (
        <header className="site_header">
            <div className="container">
                <div className="wrapper">
                    <NavLink to="/" className="site_logo">
                        <img src={logo} alt="" width="120" />
                    </NavLink>
                    <ul className="navbar">
                        {menuLinks.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.to}
                                    className="navLink"
                                >
                                    {item.text}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <a className="navLink quoteBtn" href="">Get a quote</a>
                        </li>
                    </ul>
                </div>
            </div>

        </header >
    )
}

export default Header