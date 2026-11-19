import {  Link, NavLink, Outlet} from 'react-router'
import './Layout.css'

function Layout(){
    return(
        <>
            <header className='site-header'>
                <nav className='site-nav'>
                    <Link className='brand' to={"/"}>Albert Bun</Link>
                    <div className='nav-links'>
                        <NavLink className="nav-link" to="/">About Me</NavLink>
                        <NavLink className="nav-link" to="/experiences">Experiences</NavLink>
                        <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        <NavLink className="nav-link" to="/interests">Interests</NavLink>
                    </div>
                </nav>
            </header>

            <main className='site-main'>
                <Outlet />
            </main>

            <footer className='site-footer'>
                <div className='footer-inner'>   
                    <p> © 2026 Albert Bun · Built with React & TypeScript</p>
                    <div className='footer-links'>
                        <a href="mailto:albert.bunwork@gmail.com">Email</a>
                        <a href="https://www.linkedin.com/in/albert-bun">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout