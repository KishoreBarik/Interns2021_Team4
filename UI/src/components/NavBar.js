import React, { Component } from "react";
import { Link } from "react-router-dom";
import {  MdOutlineTimer} from "react-icons/md";


class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container">

            <Link class="navbar-brand" to="/">
              <h5><MdOutlineTimer size={26}/>TimeHunter.io</h5>
            </Link>

            <div class="d-flex justify-content-end"></div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
