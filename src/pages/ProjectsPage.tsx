import PageHeader from "../components/PageHeader"
import ProjectList from "../components/ProjectList"
import { projects } from "../data/projects"


function ProjectsPage(){
    return(
        <>
            <PageHeader title="Projects" lead="Things I've designed and built outside of a job description."/>
            <ProjectList 
                projectList = {projects}
            />
        </>
    )
}

export default ProjectsPage