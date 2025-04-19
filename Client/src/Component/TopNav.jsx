import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const TopNav=()=>{
    return(
        <>
        <div id="mynav">
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>

          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/search">  <FaSearch /> Search</Nav.Link>
            <Nav.Link as={Link} to="/login">   <FaUser/>Login</Nav.Link>
          </Nav>
        </Container>

        
      </Navbar>
      </div>
        </>
    )
}
export default TopNav;