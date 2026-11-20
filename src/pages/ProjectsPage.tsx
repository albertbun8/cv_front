import PageHeader from "../components/ui/PageHeader"
import ProjectList from "../components/features/projects/ProjectList"
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