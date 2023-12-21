import styles from './Services.module.css'

const Services = () => {
    return (
        <>
            <div className={styles.services}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Services</h1>
                    <ul className={styles.servicesList}>
                        <li>
                            <h3 className={styles.itemTitle}>UI/UX <br />
                                Design</h3>
                            <p className={styles.desc}>It continues the theme of the project concept and create its final appearance, interface and memorable style</p>
                        </li>
                        <li>
                            <h3 className={styles.itemTitle}>Front end <br />
                                development</h3>
                            <p className={styles.desc}>Creating static pages, thought out in the project and visualized on the design</p>
                        </li>
                        <li>
                            <h3 className={styles.itemTitle}>Back end <br />
                                development</h3>
                            <p className={styles.desc}>Development of mechanics of receiving and transmitting various types of data, creation of calculations and data storage</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Services