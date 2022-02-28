import {React} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import { Navbar,Nav,NavItem,NavbarBrand,Container, Button } from "react-bootstrap";
import './Heading.css';



const Admin=()=>{
    return(
        
        <div>
            <NavBar></NavBar>
            <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col-12">
            <Navbar>
                <Container>
                    <NavbarBrand href="/admin">Manage</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <Link className="jhhh" to="/mainclient">Add Client</Link>&nbsp;&nbsp;
                        </NavItem>
                        <NavItem>
                            <Link className="jhhh" to="/addproject">Add Project</Link>&nbsp;&nbsp;
                        </NavItem>
                        <NavItem>
                            <Link className="jhhh" to="/admindashboard">Add User</Link>&nbsp;&nbsp;
                        </NavItem>
                        <NavItem>
                            <Link className="jhhh" to="/adminhead">Add Department</Link>
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

export default Admin;