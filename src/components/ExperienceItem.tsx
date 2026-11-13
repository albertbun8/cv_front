import { useState } from "react"
import type { Experience } from "../data/experiences"

type ExperienceItemProp = {
    experience: Experience
}

function ExperienceItem({experience} : ExperienceItemProp){
    const [visibility, setVisibility] = useState(false)
    const descriptionButton = visibility ? "Hide details" : "Show details"

    function toggleVisibility(){
        setVisibility(prev => !prev)
    }

    return (
        <li>
            <strong>{experience.role}</strong> at {experience.company} · {experience.period}
            {visibility && 
                <ul>{experience.description.map((item) => (
                    <li key={item}>{item}</li>
                ))}
                </ul> 
            }
            <button onClick={toggleVisibility}>{descriptionButton}</button>
        </li>
    )
}

export default ExperienceItem