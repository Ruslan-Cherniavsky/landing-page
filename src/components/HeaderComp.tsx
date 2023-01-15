
import { Link } from "react-router-dom";



const Header = () => {
  return (<div>
    <nav className="nav-extended  pink lighten-3">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Ruslan Cherniavsky
        </Link>
        <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/ProjectsPage">My Projects</Link>
          </li>

          <li>
            <Link to="/AboutPage">Abut Me</Link>
          </li>


          <li>
            <Link to="/ContactPage">Contact Me</Link>
          </li>




        </ul>
      </div>
    </nav>

    <ul className="sidenav" id="mobile-demo">
    </ul>
  </div>
  );
}

export default Header;
