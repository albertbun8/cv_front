
import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import ExperiencePage from './pages/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage'
import InterestsPage from './pages/InterestsPage'
import ErrorPage from './pages/ErrorPage'
import AboutMePage from './pages/AboutMePage'

function App() {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route index element={<AboutMePage />} />
            <Route path='/experiences' element={<ExperiencePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/interests' element={<InterestsPage />} />

            <Route path='*' element={<ErrorPage />} />
        </Route>
    </Routes>
  )
}

export default App
