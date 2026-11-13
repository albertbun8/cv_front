import './App.css'
import ContactForm from './components/ContactForm'
import ExperienceList from './components/ExperienceList'
import Header from './components/Header'
import ProjectList from './components/ProjectList'
import {experiences} from './data/experiences'
import { projects } from './data/projects'

function App() {


  return (
    <>
      <Header 
        name="Albert Bun"
        title='Frontend Developer'
        email='albert.bunwork@gmail.com'
      />
      
      <ExperienceList
        experienceList={experiences}
      />

      <ProjectList 
        projectList = {projects}
      />

      <ContactForm/>
    </>
  )
}

export default App
