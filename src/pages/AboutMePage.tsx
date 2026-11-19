import AboutSection from "../components/AboutSection"
import Hero from "../components/Hero"
import { skills } from "../data/skills"

function AboutMePage(){
    return(
        <>
            <Hero />

            <AboutSection skills = {skills}/>
        </>
    )
}

export default AboutMePage