
import { Link } from "react-router-dom";


const HomePage = () => {
    return <>

        <h2 className="pageName"> Ruslan Chernivsky</h2>

        <h5 className="pageName">Full Stack Developer & Designer </h5>

        <div className="img">

            <img src="https://i.postimg.cc/7LrFWHPn/ezgif-com-gif-maker-1.gif" />

        </div>


        <div className="lnks">

            <Link className="likn" to="/ProjectsPage">My Projects</Link>
            <Link className="likn" to="/AboutPage">Abut Me</Link>
            <Link className="likn" to="/ContactPage">Contact Me</Link>
        </div>

        <a className="pageName" href='https://resume.io/r/KUfmwzFnA'>Link to my CV</a>


        <div className="container">
            <div className="row">

            </div>

        </div>

    </>

};

export default HomePage;
