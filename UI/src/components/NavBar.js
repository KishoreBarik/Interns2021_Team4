import React from "react";
import { MdOutlineTimer } from "react-icons/md";
import { Navbar, Nav } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

function NavBar(props) {
  return (
    <div className="nav-container">
      <div className="row">
        <div className="col-md-12">
          <Navbar
            className="navbar"
            bg="dark"
            variant="dark"
            expand="lg"
            sticky="top"
          >
            <Navbar.Brand href="/">
              <MdOutlineTimer size={40} />
              &nbsp;TimeHunter.io
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="nav-elements">
              <Nav className="mr-auto active">
                <Nav.Link href="/user/dashboard">{props.navElement}</Nav.Link>
              </Nav>
              <Nav className="mr-auto">
                <Nav.Link href="/user/dashboard">{props.navElement1}</Nav.Link>
              </Nav>
              <Nav className="mr-auto">
                <Nav.Link href="/user/dashboard">{props.navElement2}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <br />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
