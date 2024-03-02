import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../utils/firebaseConfig";
import HbImage from "../Hb1.png";
import "./navbar.css";

const NavBar = () => {
  const [myImage, setMyImage] = useState("");
  useEffect(() => {
    const query = ref(db, "/");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setMyImage(data["navbarimageUrl"]);
      //console.log(data);
    });
  }, []);
  return (
    <>
      <motion.div animate={{ opacity: [0.6, 1] }} transition={{ duration: 1 }}>
        <nav className="glass-navbar fixed-top shadow-lg navbar navbar-expand-lg p-0">
          <div className="container-fluid p-3">
            <Link className="navbar-brand" href="#">
              <div className="d-inline px-2">
                <img
                  className="rounded-circle"
                  src={myImage}
                  alt="ProfileImage"
                  style={{
                    height: "3em",
                    width: "3em",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <span className="fw-bold">R Hema Bhushan</span>
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
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={{ pathname: "/", hash: "#aboutme" }}
                  >
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to={{ pathname: "/", hash: "#skills" }}
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to={{ pathname: "/", hash: "#skills" }}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="nav-link active"
                    to={{ pathname: "/", hash: "#contact" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </motion.div>
    </>
  );
};

export default NavBar;
