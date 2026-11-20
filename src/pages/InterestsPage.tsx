import Gallery from "../components/features/interests/Gallery"
import HobbyList from "../components/features/interests/HobbyList"
import PageHeader from "../components/ui/PageHeader"
import { hobbies } from "../data/hobbies"
import { photoList } from "../data/photo"

function InterestsPage(){
    return(
        <>
            <PageHeader title="Off the keyboard" lead="When I'm not coding, I'm boxing, baking sourdough, losing at chess or getting distracted by my cats."/>
            <HobbyList hobbies={hobbies}/>
            <Gallery photoList={photoList} />
        </>
    )
}

export default InterestsPage