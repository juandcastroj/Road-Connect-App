import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { ContHomeRoad } from '../styles/styles'
import Naveg from './Naveg'
import NavRoutes from './NavRoutes'

const RoutesHome = () => {
    return (
        <div>
             <Naveg/>
             <NavRoutes/>
             <ContHomeRoad>
            <h2 style={{color: 'yellow'}} >Rutas Populares</h2>
            <hr></hr>
            <Row xs={1} md={4} className="g-4">
                {Array.from({ length: 12 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://th.bing.com/th/id/R.a3e195edfc82d354395125397dfc39fc?rik=KkGswwDJXxD4bQ&pid=ImgRaw&r=0" />
                            <Card.Body>
                                <Card.Title>Card Ruta</Card.Title>
                                <Card.Text>
                                   ruta Bogota --- destino
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            </ContHomeRoad>
        </div>
    )
}

export default RoutesHome