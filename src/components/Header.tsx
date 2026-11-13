type HeaderProps = {
    name: string;
    title: string;
    email: string;
}

function Header({name , title, email}: HeaderProps){

    return(
        <>
            <h1>{name}</h1>
            <p>{title}</p>
            <a href={`mailto:${email}`}>{email}</a>
        </>
    )
}

export default Header