import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import logo from '../../assets/logo.png';

const Header = () => {
    const [activeLink, setActiveLink] = useState();

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };
    const menuLinks = [
        { text: "Home", to: "/" },
        { text: "Projects", to: "/Projects" },
        { text: "Services", to: "/Services" },
        { text: "About", to: "/About" },
    ]
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <img src={logo} alt="" width="120" />
                </Link>
                <ul className={styles.navbar}>
                    {menuLinks.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.to}
                                onClick={() => handleLinkClick(index)}
                                className={`${activeLink === index ? 'active' : ''} ${styles.navLink}`}
                            >
                                {item.text}
                            </Link>
                        </li>
                    ))}

                    <li>
                        <a className={`${styles.navLink} ${styles.quoteBtn}`} href="">Get a quote</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header