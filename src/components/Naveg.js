import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Naveg = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Road Connect</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/profile">Mi Perfil</Nav.Link>
                        <Nav.Link href="/myRoutes">Mis Rutas</Nav.Link>
                        <Nav.Link href="/events">Eventos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Naveg