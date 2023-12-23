import { useState } from 'react';
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import SelectedWorks from '../components/Projects/Projects'

const Home = () => {

    // let name = "Dark";
    const [isToggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!isToggle);
    }
    return (
        <>
            <div>
                <h1>{isToggle ? "Dark" : "Light"}</h1>
                <button onClick={handleClick}>
                    <h1>Toggle Button</h1>
                </button>
            </div>
            <Hero />
            <Services />
            <SelectedWorks />

        </>
    )
}

export default Home