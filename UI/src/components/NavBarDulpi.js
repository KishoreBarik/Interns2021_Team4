import { Navbar,Nav,NavItem,NavbarBrand,Container, Button } from "react-bootstrap";
import { MdOutlineTimer } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBarDulpi=()=>{
return(
             <Navbar>
                <Container>
                <Navbar.Brand href="/">
               <MdOutlineTimer size={40} />
                 &nbsp;TimeHunter.io
                </Navbar.Brand>
                    <Nav>
                    <NavItem>
                            <Link className="jhhh" to="/loginpage">LOGIN</Link>&nbsp;&nbsp;
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>)
}

export default NavBarDulpi