import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import "./navbar.css";
const BottomNavBar = () => {
  return (
    <>
      <div
        className="rounded-4 mt-4 container shadow-lg"
        style={{ backgroundColor: "rgba(20, 96, 255, 0.4)" }}
      >
        <div className="row container">
          <div className="m-2 p-2 col-lg-3 mb-3">
            <h2>Contact</h2>
            <h4>R Hema Bhushan</h4>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingNameInput"
                    placeholder="rakesh"
                  />
                  <label htmlFor="floatingNameInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmailInput"
                    placeholder="rakesh@gmail.com"
                  />
                  <label htmlFor="floatingEmailInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="floatingMessageInput"
                    placeholder="Sample Message"
                    style={{ height: "10em" }}
                  />
                  <label htmlFor="floatingMessageInput">Message</label>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-12 d-lg-flex justify-content-end">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/r-hema-bhushan-25722024a"
                  >
                    LinkedIn
                  </a>{" "}
                  <FontAwesomeIcon
                    className="mx-1"
                    icon={icon({ name: "linkedin", style: "brands" })}
                    size="xl"
                  />
                </li>
                <li className="mb-2">
                  GitHub{" "}
                  <FontAwesomeIcon
                    className="mx-1"
                    icon={icon({ name: "github", style: "brands" })}
                    size="xl"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavBar;
