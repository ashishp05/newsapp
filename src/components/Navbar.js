import React from "react";

export const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary   ">
      <div className="container">
        <a className="navbar-brand" href="/">
        <h1>NewsWallah</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-1 mb-lg-0">
            <li className="nav-item">
              <div
                className="nav-link "
                onClick={() => setCategory("business")}
              >
                Business
              </div>
            </li>
          
            <li className="nav-item">
              <div className="nav-link " onClick={() => setCategory("health")}>
                Health
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link "
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link " onClick={() => setCategory("science")}>
                Science
              </div>
            </li>

            <li className="nav-item">
              <div className="nav-link " onClick={() => setCategory("sports")}>
                Spotrs
              </div>
            </li>
          </ul>
        </div>
        <h1 className='text-center fs-1 text-secondary  '>  ----News App---- </h1>

      </div>
    </nav>
  );
};
