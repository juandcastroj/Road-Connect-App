import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAsync, listRouteAsync } from '../actions/actionRoutes'
import { ContHomeRoad ,Logos} from '../styles/styles'
import Naveg from './Naveg'
import logo from "../images/cicla.png";
import Footer from './Footer'

const MyRoutes = () => {

    const dispatch = useDispatch()
    const { routes } = useSelector(store => store.routes)
    const [loading] = useState(false)

    useEffect(() => {
        dispatch(listRouteAsync())
    }, [dispatch])

    const Loading = () =>  <Logos src={logo} alt="Logo" />

    const ShowMyRoutes = () => {
        return (
            <div>
                <Naveg />
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">   
                            <Nav.Link href="/addRoute">Agregar Nueva ruta</Nav.Link>                         
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <ContHomeRoad>
                    <Row xs={1} md={3} className="g-4">
                        {routes.map((e, i) => (
                            <Col key={i} >
                                <Card>
                                    <Card.Img variant="top" src={e.imagen}  style={{display:'inline-block'}} />
                                    <Card.Body style={{display:'inline-block'}} >
                                        <h4>{e.nombre}</h4>
                                        <Card.Text>
                                            <p>distancia:</p> <h6> {e.distancia}</h6>
                                             <p>desnivel positivo:</p> <h6> {e.desnivel}</h6>
                                             <p>tiempo promedio:</p> <h6> {e.tiempo}</h6>
                                        </Card.Text>
                                        <Button variant='outline-danger' onClick={() => dispatch(deleteAsync(e.nombre))} >Eliminar</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </ContHomeRoad>
                <Footer/>
            </div>
        )
    }

    return (
        <div>
            {
                loading ? <Loading /> : <ShowMyRoutes />
            }
        </div>
    )
}

export default MyRoutes