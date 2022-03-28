import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logoNav from '../images/cicla.png'

const Naveg = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                   <a  href='/home' ><img alt='logoNav' src={logoNav} width={70} /></a>
                    <Nav className="me-auto">
                        <Nav.Link href="/profile">Mi Perfil</Nav.Link>
                        <Nav.Link href="/myRoutes">Mis Rutas</Nav.Link>
                        <Nav.Link href="/events">Eventos</Nav.Link>
                        <Nav.Link href="/login">Log In</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Naveg