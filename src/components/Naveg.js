import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
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
                <Link  to={"/home"}><img alt='logoNav' src={logoNav} style={{marginRight:'15px'}} width={70} /></Link>
                    <Nav className="me-auto">
                        <Nav.Link style={{fontWeight:'900', margin:'6px'}}><Link  to={"/profile"} style={{textDecoration:'none'}} >Mi Perfil</Link></Nav.Link>
                        <Nav.Link style={{fontWeight:'800', margin:'6px'}}><Link  to={"/myroutes"} style={{textDecoration:'none'}} >Mis Rutas</Link></Nav.Link>                                                                         
                    </Nav>
                    <Nav.Link href="/login" > <h5 style={{fontWeight:'900', margin:'6px'}}  onClick={()=> {handleLogout()}} ><Link to={"/login"} style={{textDecoration:'none'}} >Logout</Link></h5></Nav.Link>   
                </Container>
            </Navbar>
        </div>
    )
}

export default Naveg