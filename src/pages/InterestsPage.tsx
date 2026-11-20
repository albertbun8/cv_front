import Gallery from "../components/Gallery"
import HobbyList from "../components/HobbyList"
import PageHeader from "../components/PageHeader"
import { hobbies } from "../data/hobbies"
import { photoList } from "../data/photo"

function InterestsPage(){
    return(
        <>
            <PageHeader title="Off the keyboard" lead="..."/>
            <HobbyList hobbies={hobbies}/>
            <Gallery photoList={photoList} />
        </>
    )
}

export default InterestsPage