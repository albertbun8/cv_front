import "./AboutSection.css"

type AboutSectionProp = {
    skills: string[]
}

function AboutSection({skills} : AboutSectionProp){
    return(
        <div className="container">
            <section className="about-card">
                <div className="about-text">
                    <h2>Who I am</h2>
                    <p>I'm a software engineering graduate from ÉTS (Aug. 2026) with four years at the Canada Revenue Agency, front-end and back-end work at a startup, and native mobile development on Parkus, a parking app for Montréal.</p>
                </div>
                <div className="about-stack">
                    <h3>Core stack</h3>
                    <ul className="skill-list">
                        {skills.map((item) => (
                            <li key={item} className="skill-chip">{item}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default AboutSection