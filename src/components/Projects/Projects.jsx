import styles from './Projects.module.css'
import caseStudy0 from '../../assets/case-study0.png';
import caseStudy1 from '../../assets/case-study1.png';

const Projects = () => {
    return (
        <div className={styles.SelectedWorks}>
            <div className={styles.sectionTitle}>
                <div className={styles.container}>
                    <h1>Selected works.</h1>
                </div>
            </div>
            <div>
                <div className={styles.listItem}>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <div>
                                <a href="#">
                                    <h2>Mk.</h2>
                                </a>
                                <h4>E-commerce UI/UX design</h4>
                            </div>
                            <a className={styles.viewProject} href="">
                                View project
                                <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.1425 6.94578C21.9425 6.04578 2 6.90002 2 6.90002M19.1425 6.94578C16.3425 7.84578 10.6225 10.2458 10.1425 12.6458M19.1425 6.94578C16.9798 5.2458 9.66271 3.44 9.66271 2" stroke="white" strokeWidth="1.5" />
                                </svg>
                            </a>
                        </div>
                        <div className={styles.image}>
                            <img src={caseStudy1} />
                        </div>
                    </div>
                </div>
                <div className={styles.listItem}>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <div>
                                <a href="#">
                                    <h2>Blanchard.</h2>
                                </a>
                                <h4>Training the World's Best Managers</h4>
                            </div>
                            <a className={styles.viewProject} href="">
                                View project
                                <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.1425 6.94578C21.9425 6.04578 2 6.90002 2 6.90002M19.1425 6.94578C16.3425 7.84578 10.6225 10.2458 10.1425 12.6458M19.1425 6.94578C16.9798 5.2458 9.66271 3.44 9.66271 2" stroke="white" strokeWidth="1.5" />
                                </svg>
                            </a>
                        </div>
                        <div className={styles.image}>
                            <img src={caseStudy0} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects