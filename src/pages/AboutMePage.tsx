import AboutSection from "../components/AboutSection"
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
        </>
    )
}

export default AboutMePage