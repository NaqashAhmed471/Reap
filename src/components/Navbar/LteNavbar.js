import React, { useState } from "react";
import { Link } from "react-router-dom";

const LteNavbar = () => {
  const [arrow, setArrow] = useState(false);

  const handleArrow = () => {
    arrow ? setArrow(false) : setArrow(true);
  };
  return (
    <nav className="main-header shadow-sm navbar navbar-expand navbar-dark position-sticky top-0">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className="nav-link d-none d-sm-inline-block"
            data-widget="pushmenu"
            onClick={handleArrow}
            to="#"
            role="button"
          >
            <i className="fas fa-bars"></i>
          </Link>
          {/* <Link
            className="nav-link navbar-brand d-sm-none d-inline-block"
            to="#"
          >
            Crawl Reap2
          </Link> */}
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Navbar Search */}
        <li className="nav-item">
          <Link
            className="nav-link"
            data-widget="navbar-search"
            data-target="#navbar-search3"
            to="#"
            role="button"
          >
            <i className="fas fa-search" />
          </Link>
          <div className="navbar-search-block" id="navbar-search3">
            <form className="form-inline">
              <div className="input-group input-group-sm">
                <input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search" />
                  </button>
                  <button
                    className="btn btn-navbar"
                    type="button"
                    data-widget="navbar-search"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        {/* Messages Dropdown Menu */}
        <li className="nav-item dropdown" data-toggle="dropdown">
          <Link className="nav-link" data-toggle="dropdown" to="#">
            <i className="far fa-comments" />
            <span className="badge badge-danger navbar-badge">3</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <Link to="#" className="dropdown-item">
              <div className="media">
                <img
                  src="dist/img/user1-128x128.jpg"
                  alt="User Avatar"
                  className="img-size-50 mr-3 img-circle"
                />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Brad Diesel
                    <span className="float-right text-sm text-danger">
                      <i className="fas fa-star"></i>
                    </span>
                  </h3>
                  <p className="text-sm">Call me whenever you can...</p>
                  <p className="text-sm text-muted">
                    <i className="far fa-clock mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item">
              <div className="media">
                <img
                  src="dist/img/user8-128x128.jpg"
                  alt="User Avatar"
                  className="img-size-50 img-circle mr-3"
                />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    John Pierce
                    <span className="float-right text-sm text-muted">
                      <i className="fas fa-star"></i>
                    </span>
                  </h3>
                  <p className="text-sm">I got your message bro</p>
                  <p className="text-sm text-muted">
                    <i className="far fa-clock mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item">
              <div className="media">
                <img
                  src="dist/img/user3-128x128.jpg"
                  alt="User Avatar"
                  className="img-size-50 img-circle mr-3"
                />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Nora Silvester
                    <span className="float-right text-sm text-warning">
                      <i className="fas fa-star"></i>
                    </span>
                  </h3>
                  <p className="text-sm">The subject goes here</p>
                  <p className="text-sm text-muted">
                    <i className="far fa-clock mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </Link>
            <div className="dropdown-divider"></div>
            {/* <a href="#" class="dropdown-item dropdown-footer">
              See All Messages
            </a> */}
          </div>
        </li>
        {/* Notifications Dropdown Menu */}
        <li className="nav-item dropdown">
          <Link className="nav-link" data-toggle="dropdown" to="#">
            <i className="far fa-bell" />
            <span className="badge badge-warning navbar-badge">15</span>
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link
            className="nav-link"
            data-widget="fullscreen"
            to="#"
            role="button"
          >
            <i className="fas fa-expand-arrows-alt" />
          </Link>
        </li>
        <li className="nav-item d-sm-none d-inline-block">
          <Link
            className="nav-link"
            data-widget="pushmenu"
            data-slide="true"
            to="#"
            role="button"
          >
            <i className="fas fa-bars"></i>
          </Link>
        </li>
        {/* <li className="nav-item d-none d-sm-inline-block">
          <Link className="nav-link" to="/login">
            <span className="p-1 badge rounded-pill bg-danger shadow-sm bg-gradient fw-light">
              LogIn / SignUp
            </span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default LteNavbar;
