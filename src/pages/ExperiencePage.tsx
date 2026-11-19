import ExperienceList from "../components/ExperienceList"
import { experiences } from "../data/experiences"

function ExperiencePage(){
    return(
        <>
            <h1>Experience Page</h1>
            <ExperienceList
                experienceList={experiences}
            />
        </>
    )
}

export default ExperiencePage