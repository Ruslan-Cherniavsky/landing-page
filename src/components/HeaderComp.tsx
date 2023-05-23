
import { Link } from "react-router-dom";



const Header = () => {
  return (<div>
    <nav className="nav-extended  pink lighten-3">
      <div className="nav-wrapper">
        <Link to="/landing-page/" className="brand-logo">
          <span>Ruslan Cherniavsky</span>
        </Link>
        <Link to="/landing-page/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">

          <li>
            <Link to="/landing-page/"><span>Home</span></Link>
          </li>

          <li>
            <Link to="/ProjectsPage"><span>My Projects</span></Link>
          </li>

          <li>
            <Link to="/AboutPage"><span>About Me</span></Link>
          </li>


          <li>
            <Link to="/ContactPage"><span>Contact Me</span></Link>
          </li>
        </ul>
      </div>
    </nav>


    


  </div>

  );
}

export default Header;
