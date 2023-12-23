import styles from './Footer.module.css'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <a href="" className={styles.logo}>
                    <img src={logo} alt="" width="120" />
                </a>
                <ul className={styles.navbar}>
                    <li>
                        <a className={styles.navLink} href="">Projects</a>
                    </li>
                    <li>
                        <a className={styles.navLink} href="">Services</a>
                    </li>
                    <li>
                        <a className={styles.navLink} href="">About</a>
                    </li>
                    <li>
                        <a className={`${styles.navLink} ${styles.quoteBtn}`} href="">Get a quote</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer