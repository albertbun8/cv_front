import AboutSection from "../components/AboutSection"
import ContactForm from "../components/ContactForm"
import ExploreCards from "../components/ExploreCards"
import Glimpse from "../components/Glimpse"
import Hero from "../components/Hero"
import { exploreList } from "../data/explore"
import { photoList } from "../data/photo"
import { skills } from "../data/skills"

function AboutMePage(){
    return(
        <>
            <Hero />
            <AboutSection skills = {skills}/>
            <ExploreCards exploreList={exploreList}/>
            <Glimpse photoList = {photoList}/>
            <ContactForm />
        </>
    )
}

export default AboutMePage