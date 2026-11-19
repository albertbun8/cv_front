import ContactForm from "../components/ContactForm"
import Header from "../components/Header"

function AboutMePage(){
    return(
        <>
            <Header
                name="Albert Bun"
                email='albert.bunwork@gmail.com'
                title='Frontend Developer'
            />

            <ContactForm/>
        </>
    )
}

export default AboutMePage