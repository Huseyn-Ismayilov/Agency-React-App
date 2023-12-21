import gif from '../../assets/7V7.gif'
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.h1}>
                            Think. Design.
                            Develop. Launch.
                            <span>Repeat.</span>
                        </h1>
                    </div>
                    <div className={styles.image}>
                        <img src={gif} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero