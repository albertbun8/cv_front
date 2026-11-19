import { Link } from "react-router"
import "./Hero.css"

function Hero(){

    return(
        <section className="hero">
            <div className="container hero-inner">
                <div className="hero-text">
                    <p className="hero-eyebrow">
                        Montreal, Quebec
                    </p>

                    <h1>Hi, I'm Albert</h1>

                    <p className="hero-lead">
                        Full-stack software developer who loves building interfaces people actually enjoy using — from web apps in React to mobile maps rendering 250,000+ features.
                    </p>

                    <div className="hero-actions">
                        <Link className="btn btn-primary" to={"/projects"}>See my projects</Link>
                        <a className="btn" href="mailto:albert.bunwork@gmail.com">Contact me</a>
                        <a className="btn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/albert-bun">LinkedIn</a>

                    </div>
                </div>
                <div className="hero-portrait" role="img" aria-label="Portrait placeholder">

                </div>
            </div>
        </section>
    )
}

export default Hero