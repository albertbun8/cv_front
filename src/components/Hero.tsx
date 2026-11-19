type HeroProps = {
    name: string;
    title: string;
    email: string;
}

function Hero({name , title, email}: HeroProps){

    return(
        <>
            <h1>{name}</h1>
            <p>{title}</p>
            <a href={`mailto:${email}`}>{email}</a>
        </>
    )
}

export default Hero