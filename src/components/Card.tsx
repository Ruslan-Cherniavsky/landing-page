

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


                <div className="card-content">
                    <div className="tecs-div">
                        <h6 className="tecs">Technologies:</h6>

                        <p>{props.technologies}</p>
                    </div>
                </div>


                <div className="card-content">
                    <div className="tecs-div">
                        <h6 className="tecs">Deploy:</h6>

                        <p>{props.deploy}</p>
                    </div>
                </div>



                <div className="linksBottom">
                    <div className="card-action">
                        <a className="cardLink" href={props.projectLink}>SITE</a>
                    </div>
                    <div className="card-action">
                        <a className="cardLink" href={props.gitHubLink}>Frontend</a>
                        <a className="cardLink" href={props.gitHubLink2}>Backend</a>
                    </div>
                </div>



            </div>
        </div>
        // </div >
        // </div>
    );
}

export { Card };