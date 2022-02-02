import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container">
            <Link class="navbar-brand" to="/">
              <h5>TimeHunter.io</h5>
            </Link>

            <div class="d-flex justify-content-end"></div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
