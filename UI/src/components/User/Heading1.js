import {React} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import { Navbar,Nav,NavItem,NavbarBrand,Container, Button } from "react-bootstrap";
import './Heading.css';



const Heading1=()=>{
    return(
        
        <div>
            
            <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col-12">
            <Navbar>
                <Container>
                    <NavbarBrand href="/user/dashboard">User</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <Link className="jhhh" to="/user/dashboard">Dashboard</Link>&nbsp;&nbsp;
                        </NavItem>
                        <NavItem>
                            <Link className="jhhh" to="/Reports">Report</Link>&nbsp;&nbsp;
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
            </div>
            <div className="col"></div>
            </div>
        </div>
            </div>
            
        
        
    );
}

export default Heading1;