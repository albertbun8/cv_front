import type { Project } from "../data/projects"

type ProjectItemProp = {
    project: Project
}

function ProjectItem({project}: ProjectItemProp){
    return(
        <li>
            <strong>{project.title}</strong> · {project.year}
            <ul>
                {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <ul>
                {project.summary.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </li>
    )
}

export default ProjectItem