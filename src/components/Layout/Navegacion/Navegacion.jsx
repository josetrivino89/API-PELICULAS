import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const Navegacion = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand href="#home">Mundo Peliculas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
                <Link className='nav-link' to="/Home">Home</Link>
            </Nav.Link>
            <Nav.Link>
                <Link className='nav-link' to="/">Estrenos</Link>
            </Nav.Link>
            <Nav.Link>
                <Link className='nav-link' to="/">Buscador</Link>
            </Nav.Link>
            <Nav.Link>
                <Link className='nav-link' to="/">Mas vistas</Link>
            </Nav.Link>                     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Navegacion