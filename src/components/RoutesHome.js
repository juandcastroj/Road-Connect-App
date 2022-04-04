import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { ContFirst, ContHomeRoad, LogoStyle,Cosa } from '../styles/styles'
import Naveg from './Naveg'
import logo from "../images/cicla.png";
import Footer from './Footer'

const RoutesHome = () => {

    const initialState = []
    const api = 'https://routesdata.herokuapp.com/coordenadas'
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState(data)

    const getData = async () => {
        setLoading(true)
        const resp = await fetch(api)
         setData(await resp.clone().json())
         setFilter(await resp.json())
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    const Loading = () => {
        return (
            <ContFirst>
                <LogoStyle alt='first-logo' src={logo} />
            </ContFirst>
        )
    }

    const filterRoute = (dif) => {
        const updateList = data.filter((x) => x.Dificultad === dif)
        setFilter(updateList)
    }

    const ShowRoutes = () => {

        return (
            < >
                <Naveg />
                <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={{fontWeight:'900', margin:'10px'}} onClick={() => setFilter(data)} >Todas</Nav.Link>
                            <Nav.Link style={{fontWeight:'900', margin:'10px'}} onClick={() => filterRoute("Principiante")} >Principiante</Nav.Link>
                            <Nav.Link style={{fontWeight:'900', margin:'10px'}} onClick={() => filterRoute("Avanzado")} >Avanzado</Nav.Link>  
                            <Nav.Link style={{fontWeight:'900', margin:'10px'}} onClick={() => filterRoute("Experto")} >Experto</Nav.Link>                   
                            <Nav.Link style={{fontWeight:'900', margin:'10px'}} onClick={() => filterRoute("Elite")} >Elite</Nav.Link>                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <ContHomeRoad>
                    <hr></hr>
                    <Row  xs={1} md={4} className="g-4">
                        {filter.map((e, i) => (
                            <Col key={i} >
                                <Cosa>
                                    <Card.Img  variant="top" src={e.img1} />
                                    <Card.Body >
                                        <NavLink to={`/routes/${e.id}`}  style={{textDecoration: 'none'}} ><Card.Title>{e.name}</Card.Title> </NavLink>
                                    </Card.Body>
                                </Cosa>
                            </Col>
                        ))}
                    </Row>
                </ContHomeRoad>
                <Footer/>
            </>
        )
    }

    return (
        <div >
            {loading ? <Loading /> : <ShowRoutes />}
        </div>
    )
}

export default RoutesHome