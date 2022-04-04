import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../actions/actionLogin'
import logoNav from '../images/cicla.png'

const Naveg = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login")
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
                   <a  href='/home' ><img alt='logoNav' src={logoNav} style={{marginRight:'15px'}} width={70} /></a>
                    <Nav className="me-auto">
                        <Nav.Link style={{fontWeight:'900', margin:'6px'}} href="/profile">Mi Perfil</Nav.Link>
                        <Nav.Link style={{fontWeight:'800', margin:'6px'}} href="/myRoutes">Mis Rutas</Nav.Link>
                        <Nav.Link style={{fontWeight:'800', margin:'6px'}} href="/routes">Rutas Sugeridas</Nav.Link>                        
                        <Nav.Link style={{fontWeight:'800', margin:'6px'}} href="/events">Eventos</Nav.Link>                                          
                    </Nav>
                    <Nav.Link href="/login" > <h5 style={{fontWeight:'900', margin:'6px'}}>Login</h5>  </Nav.Link>
                    <Nav.Link href="/login" > <h5 style={{fontWeight:'900', margin:'6px',color:'red'}}  onClick={()=> {handleLogout()}} >Logout</h5>  </Nav.Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default Naveg