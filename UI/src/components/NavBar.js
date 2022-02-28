import React from "react";
import { MdOutlineTimer } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { Navbar, Nav, NavDropdown ,NavItem,Container,NavbarBrand} from "react-bootstrap";
import { Link } from "react-router-dom";
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
            sticky="top">
                <Container>
                    <NavbarBrand href="/admin"><MdOutlineTimer size={40} />
                    &nbsp;TimeHunter.io</NavbarBrand>
                    <Nav>
                      
                 <Navbar.Toggle aria-controls="basic-navbar-nav" ></Navbar.Toggle>  
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
                  <NavDropdown.Item href="/">{props.logout} logout</NavDropdown.Item>
                </NavDropdown>

                        
                       
                    </Nav>
                </Container>
            </Navbar>
            <br/>
        
          <br />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
