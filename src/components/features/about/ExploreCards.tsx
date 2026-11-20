import { Link } from "react-router"
import type { ExploreItem } from "../../../data/explore"
import "./ExploreCards.css"

type ExploreListProps = {
    exploreList: ExploreItem[]
}

function ExploreCards({exploreList} : ExploreListProps){
    return(
        <section className="container page-section">
            <h2 className="section-title">Explore</h2>
            <ul className="explore-grid">
                {exploreList.map((item) => (
                    <li key={item.to}>
                        <Link className="explore-card" to={item.to}>
                            <span className="explore-highlight">{item.highlight}</span>
                            <span className="explore-title">{item.title}</span>
                            <span className="explore-description">{item.description}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ExploreCards