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
        <li className="timeline-item">
            <article className="experience-card">
                <div className="experience-head">
                    {experience.logo ? (
                        <img className="experience-logo" src={experience.logo} alt={experience.company} />
                    ) : (
                        <div className="experience-logo logo-placeholder" role="img" aria-label={experience.company}>
                            LOGO
                        </div>
                    )}
                    <div className="experience-meta">
                        <h2 className="experience-role">{experience.role}</h2>
                        <p className="experience-company">{experience.company}</p>
                        <p className="experience-period">{experience.period}</p>
                    </div>    
                </div>
                <p className="experience-summary">{experience.summary}</p>
                <ul className="skill-list">
                    {experience.tags.map((item) => (
                        <li key={item} className="skill-chip">{item}</li>
                    ))}
                </ul>
                {visibility && 
                    <ul className="experience-points">
                        {experience.description.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul> 
                }
                <button className="btn-toggle" onClick={toggleVisibility} type="button" aria-expanded={visibility}>{descriptionButton}</button>
            </article>
        </li>
    )
}

export default ExperienceItem