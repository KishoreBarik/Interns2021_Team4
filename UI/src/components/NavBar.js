import React from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineTimer } from "react-icons/md";
import "./NavBar.css";

function NavBar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <Link class="navbar-brand" to="/">
          <h5>
            <MdOutlineTimer size={26} />
            &nbsp;TimeHunter.io
          </h5>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link className="nav-link" to="/user/dashboard">
                {props.navElement}
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="">
                {props.navElement1}
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="">
                {props.navElement2}
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {props.username}
              </Link>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link class="dropdown-item" to="#">
                  View Profile
                </Link>
                <Link class="dropdown-item" to="#">
                  Change Password
                </Link>
                <Link class="dropdown-item" to="/">
                  Log out
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
