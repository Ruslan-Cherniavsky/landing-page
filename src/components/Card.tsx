

import { useEffect } from "react";

function Card(props: any) {
    // props = {title, description, imgUrl, projectLink}: {title: string, description: string, imgUrl: string, projectLink: string}

    useEffect(() => {
    
        return () => {
        console.log(props.projectLink)
        };
      }, []); 


    
    return (
        // <div className="container" >
        //     <div className="row">
        
        <div className="col s12 l6 xl4">
            <div className="card">

                <div className="title">
                    <span className="card-title">{props.title}</span>
                </div>

                <div className="card-image">
                <span className="xspan">
                    <img className="cardImage" src={props.imgUrl} /></span>
                </div>
                <div className="card-content">
                    <p><span>{props.description}</span></p>
                </div>


                <div className="card-content">
                    <div className="tecs-div">
                        <h6 className="tecs">Technologies:</h6>

                        <p><span className="xspan2">{props.technologies}</span></p>
                    </div>
                </div>


                <div className="card-content">
                    <div className="tecs-div">
                        <h6 className="tecs">Deploy:</h6>

                        <p><span className="xspan2">{props.deploy}</span></p>
                    </div>
                </div>



                <div className="linksBottom">
                    <div className="card-action">
                   { props.projectLink != "" ? <a className="cardLink" href={props.projectLink}>GO TO PAGE</a> : <a> </a>}
                    </div>
                    <div className="card-action">
                    { props.gitHubLink != "" ? <a className="cardLink" href={props.gitHubLink}> repo Frontend</a> : <a> </a>}
                    { props.gitHubLink2 != "" ? <a className="cardLink" href={props.gitHubLink2}> repo Backend</a>: <a> </a>}
                </div>



            </div>
        </div>
        </div >
    );
}

export { Card };