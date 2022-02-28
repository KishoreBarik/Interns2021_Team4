import {React} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import { Navbar,Nav,NavItem,NavbarBrand,Container, Button } from "react-bootstrap";



const Admin=()=>{
    return(
        
        <div>
            <NavBar></NavBar>
            <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col-7">
            <Navbar>
                <Container>
                    <NavbarBrand href="/admin">Manage</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <Link className="jhhh" to="/mainclient">Add Client</Link>&nbsp;
                        </NavItem>
                        <NavItem>
                            <Link className="jhhh" to="/addproject">Add Project</Link>&nbsp;
                        </NavItem>
                        <NavItem>
                            <Link className="jhhh" to="/admindashboard">Add user</Link>&nbsp;
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