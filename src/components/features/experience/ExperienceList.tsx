import type { Experience } from "../../../data/experiences"
import ExperienceItem from "./ExperienceItem"
import "./Experience.css"

type ExperienceListProps = { experienceList: Experience[] }

function ExperienceList({experienceList}: ExperienceListProps){
    return(
        <section>
            <div className="container">
                <ol className="timeline">
                    {experienceList.map((item) =>(
                        <ExperienceItem 
                            key = {item.id}
                            experience = {item}
                        />
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default ExperienceList