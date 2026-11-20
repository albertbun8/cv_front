import AboutSection from "../components/features/about/AboutSection"
import ContactForm from "../components/features/about/ContactForm"
import ExploreCards from "../components/features/about/ExploreCards"
import Glimpse from "../components/features/about/Glimpse"
import Hero from "../components/features/about/Hero"
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