import React from "react";

function Navbar() {
  return (
    <div className="nav_bar">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid" style={{ marginTop: "1rem" }}>
          <a className="navbar-brand text-light " href="#">
            Navbar
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0  ml-5"
              style={{ marginLeft: "500px" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active fs-5 text-light "
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 text-light " href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link  fs-5 text-light " href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 text-light " href="#">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button
                className="btn btn-outline-success fs-5 text-light "
                type="submit"
              >
                Sigin
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
