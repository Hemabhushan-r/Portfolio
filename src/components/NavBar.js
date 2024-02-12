import { Link } from "react-router-dom";
import HbImage from "../Hb1.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <>
      <nav className="glass-navbar fixed-top shadow-lg navbar navbar-expand-lg p-0">
        <div className="container-fluid p-3">
          <Link className="navbar-brand" href="#">
            <div className="d-inline px-2">
              <img
                className="rounded-circle"
                src={HbImage}
                style={{
                  height: "3em",
                  width: "3em",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
            R Hema Bhushan
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="#">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="#">
                  Projects
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
