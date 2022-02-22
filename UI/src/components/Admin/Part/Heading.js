import React, {useState,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./Heading.css";
import { Navbar,Nav,NavItem,NavbarBrand,Container, Button } from "react-bootstrap";

const Heading=()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col-7">
            <Navbar>
                <Container>
                    <NavbarBrand href="/admindashboard">My Team</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <Link className="jhhh" to="/adduser">Add User</Link>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
            </div>
            <div className="col"></div>
            </div>
        </div>
    );
}

export default Heading;