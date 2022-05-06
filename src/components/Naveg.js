import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../actions/actionLogin'
import logoNav from '../images/cicla.png'

const Naveg = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((store) => store.user)

    const name = user.length === 0
        ? "Hola, identificate"
        : 'Hola, ' + user.displayname 

    const profileImg = user.length === 0
        ? " "
        : user.photo

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login")
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to={"/home"}><img alt='logoNav' src={logoNav} style={{ marginRight: '15px' }} width={70} /></Link>
                    <Nav className="me-auto">
                        <Nav.Link style={{ fontWeight: '900', margin: '6px' }}><Link to={"/profile"} style={{ textDecoration: 'none' }} >Mi Perfil</Link></Nav.Link>
                        <Nav.Link style={{ fontWeight: '800', margin: '6px' }}><Link to={"/myroutes"} style={{ textDecoration: 'none' }} >Mis Rutas</Link></Nav.Link>
                    </Nav>
                    <Nav className='hdr-identificacion'>
                        <h5 style={{margin:'8px'}} > {name}</h5>
                        {user.length === 0 &&
                         <Nav.Link href="/login" > <h5 style={{ fontWeight: '900', margin: '6px' }}  ><Link to={"/login"} style={{ textDecoration: 'none' }} >Iniciar sesión</Link></h5></Nav.Link>
                        }
                        {user.length !== 0 &&
                            <Nav.Link href="/login" > <h5 style={{ fontWeight: '900', margin: '6px' }} onClick={() => { handleLogout() }} ><Link to={"/login"} style={{ textDecoration: 'none' }} >Cerrar sesión</Link></h5></Nav.Link>
                        }
                       <img alt='' src={profileImg} style={{borderRadius: '50%', borderColor: 'black'}}  width='70px' />
                    </Nav>
                </Container>
            </Navbar>
             
        </div>
    )
}

export default Naveg