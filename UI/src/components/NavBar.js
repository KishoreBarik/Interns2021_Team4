import React from "react";
import { MdOutlineTimer } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

function NavBar(props) {
  const {config} = props;
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
              {!!config && config?.map((routeObj) => {
                const {label, route, submenu} = routeObj;
                return (<Nav className="mr-auto">
                <Nav.Link href={"/" + route}>{label}</Nav.Link>
                {!!submenu && {
                  
                }}
              </Nav>)

              })}
             
              <Nav className="mr-auto">
                <NavDropdown
                  title={<BsPersonFill size={25} />}
                  id="collasible-nav-dropdown"
                  className="userprofile-container"
                >
                  <NavDropdown.Item href="/viewprofile">View Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/changepassword">
                    Change Password
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">{props.logout}</NavDropdown.Item>
                </NavDropdown>
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
