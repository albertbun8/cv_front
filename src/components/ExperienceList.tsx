import type { Experience } from "../data/experiences"
import ExperienceItem from "./ExperienceItem"

type ExperienceListProps = { experienceList: Experience[] }

function ExperienceList({experienceList}: ExperienceListProps){
    return(
        <section>
            <h2>Experiences</h2>
            <ul>
                {experienceList.map((item) =>(
                    <ExperienceItem 
                        key = {item.id}
                        experience = {item}
                    />
                ))}
            </ul>
        </section>
    )
}

export default ExperienceList