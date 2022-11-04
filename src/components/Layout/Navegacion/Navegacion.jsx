import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const Navegacion = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand>Mundo Peliculas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">        
          
                <Link className='nav-link' to="/">Home</Link>          
        
                <Link className='nav-link' to="/estrenos">Estrenos</Link>           
        
                <Link className='nav-link' to="/search">Buscador</Link>            
        
                <Link className='nav-link' to="/popular">Mas vistas</Link>
                                
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Navegacion