import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SidebarList() {
  const { pathname } = useLocation();

  const activeList = (link) => {
    return link === pathname ? "nav-link active" : "nav-link";
  };
  return (
    <Fragment>
      {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
      {/* <ul className="nav nav-treeview">
        <li className="nav-item">
          <Link to="/setting" className="nav-link">
            <i className="far fa-circle nav-icon" />
            <p>Profile Settings</p>
          </Link>
        </li>
      </ul> */}

      {/* <li className="nav-item d-sm-none d-block">
        <Link to="/login" className={activeList()}>
          <i className="nav-icon far fa-circle" />
          <p>Login / Signup</p>
        </Link>
      </li> */}

      <li className="nav-item ">
        <Link to="/tasks" className={activeList("/tasks")}>
          <i className="nav-icon fas fa-home" />
          <p>Tasks</p>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/queries" className={activeList("/queries")}>
          <i className="nav-icon fas fa-map" />
          <p>Queries</p>
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link to="/map" className={activeList("/map")}>
          <i className="nav-icon fas fa-map" />
          <p>Map</p>
        </Link>
      </li> */}

      {/* Development Page Only */}
      {/* <li className="nav-item">
        <Link to="/user-list" className="nav-link">
          <i className="nav-icon fas fa-user" />
          <p>DEV - User List</p>
        </Link>
      </li> */}
    </Fragment>
  );
}
