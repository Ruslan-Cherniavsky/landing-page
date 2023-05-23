
import { Link } from "react-router-dom";


const HomePage = () => {
    return <>
        <h1 className="pageName3"> <span>Ruslan Cherniavsky</span></h1>
        <h1 className="pageName4"><span className="xspan">Full Stack Developer & Designer </span></h1>
        <div className="img">
            <span className="xspan2"><img src="https://i.postimg.cc/7LrFWHPn/ezgif-com-gif-maker-1.gif" /></span>
        </div>

        <div className="lnks">
            <Link className="likn" to="/ProjectsPage"><span>Projects</span></Link>
            <Link className="likn" to="/AboutPage"><span>About</span></Link>
            <Link className="likn" to="/ContactPage"><span>Contact</span></Link>
        </div>
        <a className="pageName4" href='https://resume.io/r/KUfmwzFnA'><span className="xspan xspan4">Link to my CV</span></a>


        <div className="container">
            <div className="row">

            </div>

        </div>

    </>

};

export default HomePage;
