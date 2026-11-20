import type { Hobby } from "../../../data/hobbies"
import "./Interests.css"

type HobbyListProps = {
    hobbies: Hobby[]
}

function HobbyList({hobbies}: HobbyListProps){
    return(
        <section className="container page-section">
            <h2 className="section-title">What I'm into</h2>
            <ul className="hobby-grid">
                {hobbies.map((item) => (
                    <li key={item.id} className="hobby-card">
                        {item.image
                            ? <img className="hobby-image" src={item.image} alt={item.name} />
                            : <div className="hobby-image image-placeholder" role="img" aria-label={item.name}>Photo coming soon</div>
                        }

                        <div className="hobby-body">
                            <h3 className="hobby-name">{item.name}</h3>
                            <p className="hobby-text">{item.text}</p>

                            {item.link && (
                                <a
                                    className="hobby-link"
                                    href={item.link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.link.label} →
                                </a>
                            )}
                        </div>
                    </li>
                ))}
             </ul>
        </section>
    )
}

export default HobbyList