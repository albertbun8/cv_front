import ProjectList from "../components/ProjectList"
import { projects } from "../data/projects"


function ProjectsPage(){
    return(
        <>
            <ProjectList 
                projectList = {projects}
            />
        </>
    )
}

export default ProjectsPage