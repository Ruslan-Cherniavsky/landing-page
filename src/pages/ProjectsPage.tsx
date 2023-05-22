import { CardList } from "../components/CardList";




const ProjectsPage = () => {
    return <>
        <div className="container">
            <div className="row">
                <h1 className="pageName"><span>My projects </span></h1>
            </div>
        </div>
        <div className='list'>
        </div>
        <CardList />
    </>

};

export default ProjectsPage;
