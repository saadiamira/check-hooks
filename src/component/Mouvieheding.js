import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "./Mouviehedgin.css"

const Mouvieheding = () => {
    return (
        <div className='navv' >
            <Navbar>
    <Container>
    <Navbar.Brand href="#home">Mouvies</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
           
        </div>
        
    )
}

export default Mouvieheding
