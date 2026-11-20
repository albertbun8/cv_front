import { useState } from "react"
import type { Photo } from "../data/photo"

type GalleryProps = {
    photoList: Photo[]
}

function Gallery({ photoList }: GalleryProps) {
    const [selected, setSelected] = useState<Photo | null>(null)

    function handleClick(item: Photo){
        setSelected(item)
    }

    return (
        <section className="container page-section">
            <div className="section-header">
                <h2 className="section-title">Gallery</h2>
                <p className="section-hint">Click a photo to see it bigger.</p>
            </div>

            <ul className="gallery-grid">
                {photoList.map((item) => (
                    <li key={item.id}>
                        <button
                            type="button"
                            className="gallery-item"
                            aria-label={`Open photo: ${item.alt}`}
                            onClick={() => handleClick(item)}
                        >
                            {item.src
                                ? <img src={item.src} alt={item.alt} />
                                : <span className="gallery-caption">{item.alt}</span>
                            }
                        </button>
                    </li>
                ))}
            </ul>

            {selected &&
                <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
                    <div className="lightbox-inner">
                        {selected.src
                            ? <img className="lightbox-image" src={selected.src} alt={selected.alt} />
                            : <div className="lightbox-image lightbox-placeholder" role="img" aria-label={selected.alt}>{selected.alt}</div>
                        }
                        <div className="lightbox-bar">
                            <span className="lightbox-caption">{selected.alt}</span>
                            <button type="button" className="btn-close" onClick={()=>setSelected(null)}>Close</button>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default Gallery