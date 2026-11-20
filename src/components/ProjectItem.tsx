import type { Project } from "../data/projects"

type ProjectItemProp = {
    project: Project
}

function ProjectItem({project}: ProjectItemProp){
    return(
        <li className="project-card">
            {project.image ? <img className="project-image" src={project.image} alt={`Screenshot of ${project.title}`} /> : <div className="project-image image-placeholder" role="img" aria-label={`Screenshot of ${project.title}`}>Screenshot coming soon</div>}
            <div className="project-body">
                <div className="project-head">
                    <h2 className="project-title">{project.title}</h2>
                    <span className="project-year">{project.year}</span>
                </div>
                <p className="project-summary">{project.summary}</p>
                <ul className="skill-list">
                    {project.stack.map((item) => (
                        <li key={item} className="skill-chip">{item}</li>
                    ))}
                </ul>
            </div>
        </li>
    )
}

export default ProjectItem