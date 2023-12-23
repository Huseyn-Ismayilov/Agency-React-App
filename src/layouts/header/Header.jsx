import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'
import logo from '../../assets/logo.png';

const Header = () => {
    const menuLinks = [
        { text: "Home", to: "/" },
        { text: "Projects", to: "/projects" },
        { text: "Services", to: "/Services" },
        { text: "About", to: "/About" },
    ]
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <NavLink to="/" className={styles.logo}>
                    <img src={logo} alt="" width="120" />
                </NavLink>
                <ul className={styles.navbar}>
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
                        <a className={`${styles.navLink} ${styles.quoteBtn}`} href="">Get a quote</a>
                    </li>
                </ul>
            </div>

        </div >
    )
}

export default Header