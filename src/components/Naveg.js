import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Naveg = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Road Connect</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">mi perfil</Nav.Link>
                        <Nav.Link href="#features">Rutas</Nav.Link>
                        <Nav.Link href="#pricing">mis eventos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Naveg