import { useState } from "react"
import { CATEGORIES, type Project, type Category } from "../data/projects"
import ProjectItem from "./ProjectItem"
import "./Projects.css"

type ProjectListProps = {
    projectList: Project[]
}

function ProjectList({projectList}: ProjectListProps){
    const [filter, setFilter] = useState<Category>("ALL")

    function selectCategory(category: Category){
        setFilter(category)
    }

    const visibleProjects = projectList.filter((item) => (
        filter === "ALL" || item.category === filter
    ))


    return(
        <section className="container projects">
            <div className="filters" role="group" aria-label="Filter projects">
                {CATEGORIES.map((item) => (
                    <button 
                        type="button"
                        className="filter-button"
                        key={item}
                        aria-pressed={filter === item} 
                        onClick={()=> selectCategory(item)}>{item}
                    </button>
                ))}
            </div>

            <ul className="project-grid">
                {visibleProjects.map((item) => (
                    <ProjectItem 
                        key={item.id}
                        project={item}
                    />
                ))}
            </ul>
        </section>
    )
}

export default ProjectList