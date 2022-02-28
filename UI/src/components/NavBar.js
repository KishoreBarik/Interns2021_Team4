import React from "react";
import { MdOutlineTimer } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { Navbar, Nav, NavDropdown,NavItem,Container,NavbarBrand, } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="nav-container">
      <div className="row">
        <div className="col-md-12">
        <Navbar 
            className="navbar"
            bg="dark"
            variant="dark"
          
            sticky="top">
              <Container>
               <Navbar.Brand href="/">
               <MdOutlineTimer size={40} />
                 &nbsp;TimeHunter.io
                </Navbar.Brand>
                
                <Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <NavDropdown
                  title={<BsPersonFill size={25} />}
                  id="collasible-nav-dropdown"
                  className="userprofile-container"
                >
                  <NavDropdown.Item href="/viewprofile">
                    View Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/changepassword">
                    Change Password
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">{props.logout}</NavDropdown.Item>
                </NavDropdown>
                </Nav>
              </Container>
            </Navbar> <br/>


       
          <br />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
