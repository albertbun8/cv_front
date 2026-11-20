import { Link } from "react-router"
import "./Glimpse.css"
import type { Photo } from "../../../data/photo"

type GlimpseProps = {
    photoList: Photo[]
}

function Glimpse({photoList} : GlimpseProps){
    return(
        <section className="container page-section">
            <div className="section-header">
                <h2 className="section-title">A glimpse of my life</h2>
                <Link className="section-link" to={"/interests"}>All interests →</Link>
            </div>
            <ul className="photo-grid">
                {photoList.slice(0,4).map((item) => (
                    <li key={item.id}>
                        {item.src 
                            ? <img src={item.src} alt={item.alt} />
                            : <div className="photo-placeholder" role="img" aria-label={item.alt}>
                                <span>{item.alt}</span>
                            </div>    
                        }
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Glimpse