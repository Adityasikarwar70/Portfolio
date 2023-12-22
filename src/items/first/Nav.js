import React from "react";
import "./Nav.css";





const Nav = () => {
  return (
    <section className="nav">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className=" logo " href="/">
            PORTFOLIO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active" href="#Second">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active "
                  aria-current="page"
                  href="#Skills"
                >
                  Skills{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#projects">
                  Projects
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link active " href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
