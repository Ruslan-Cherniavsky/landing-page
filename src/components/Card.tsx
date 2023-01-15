

function Card(props: any) {
    // props = {title, description, imgUrl, projectLink}: {title: string, description: string, imgUrl: string, projectLink: string}

    return (
        // <div className="container" >
        //     <div className="row">
        <div className="col s12 l6 xl4">
            <div className="card">

                <div className="title">
                    <span className="card-title">{props.title}</span>
                </div>

                <div className="card-image">
                    <img className="cardImage" src={props.imgUrl} />
                </div>
                <div className="card-content">
                    <p>{props.description}</p>
                </div>

                <div className="linksBottom">
                    <div className="card-action">
                        <a className="cardLink" href={props.projectLink}>Visit Page</a>
                    </div>
                    <div className="card-action">
                        <a className="cardLink" href={props.gitHubLink}>Repo </a>
                    </div>
                </div>

            </div>
        </div>
        // </div >
        // </div>
    );
}

export { Card };