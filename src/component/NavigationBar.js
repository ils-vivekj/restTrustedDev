import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
// import FigureImage from "react-bootstrap/esm/FigureImage";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    backgroound-color: #222;
    height:40px;
  }
  
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
        &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = ()=>(
        <Styles>
        <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#">Trusted Dev</Navbar.Brand>
                <Nav>
                        <Nav.Link>
                                <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                                <Link to="/profile">
                                <Image width="30px" height="30px"  
                                        className="d-inline-block align-top " roundedCircle 
                                        src="./images/elicemore.webp" />
                                </Link>
                        </Nav.Link>
                        <Nav.Link>
                                <Link to="/profile">Elice More</Link>
                        </Nav.Link>
                        </Nav>
                </Container>
        </Navbar>
        </Styles>
        
       // <div  className='purple-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1'>Elise Morre</div>


    
)

// export default Home;

