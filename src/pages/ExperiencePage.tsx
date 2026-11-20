import ExperienceList from "../components/ExperienceList"
import PageHeader from "../components/PageHeader"
import { experiences } from "../data/experiences"

function ExperiencePage(){
    return(
        <>
            <PageHeader title="Experience" lead="Government-scale data tools, a Web3 startup and a native mobile app — most recent first." />
            <ExperienceList
                experienceList={experiences}
            />
        </>
    )
}

export default ExperiencePage