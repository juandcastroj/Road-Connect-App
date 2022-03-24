import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavRoutes = () => {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/routes">Todas</Nav.Link>
                            <Nav.Link href="#features">Pricipiante</Nav.Link>
                            <Nav.Link href="#pricing">Avanzado</Nav.Link>                    
                            <Nav.Link href="#deets">Elite</Nav.Link>    
                            <Nav.Link href="/myroutes">Mis Rutas</Nav.Link>                         
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </div>
  )
}

export default NavRoutes