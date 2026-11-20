import "./PageHeader.css"

type PageHeaderProps = {
    title: string,
    lead: string
}

function PageHeader( {title, lead}: PageHeaderProps){
    return(
        <section className="page-header">
            <div className="container">
                <h1 className="page-title">{title}</h1>
                <p className="page-lead">{lead}</p>
            </div>
        </section>
    )
}

export default PageHeader