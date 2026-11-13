import { useState } from "react"
import { CATEGORIES, type Project, type Category } from "../data/projects"
import ProjectItem from "./ProjectItem"

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
        <section>
            <h2>Projects</h2>

            {CATEGORIES.map((item) => (
                <button 
                    key={item}
                    aria-pressed={filter === item} 
                    onClick={()=> selectCategory(item)}> {item}
                    
                </button>
            ))}

            <ul>
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