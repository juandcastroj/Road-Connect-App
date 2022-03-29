import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteAsync, listRouteAsync } from '../actions/actionRoutes'
import { ContHomeRoad ,Logos} from '../styles/styles'
import Naveg from './Naveg'
import logo from "../images/cicla.png";

const MyRoutes = () => {

    const dispatch = useDispatch()
    const { routes } = useSelector(store => store.routes)
    const [loading] = useState(false)

    useEffect(() => {
        dispatch(listRouteAsync())
    }, [dispatch])

    const Loading = () => <Logos src={logo} alt="Logo" />

    const ShowMyRoutes = () => {
        return (
            <div>
                <Naveg />
                <ContHomeRoad>
                    <h2 style={{ color: 'yellow' }} >Mis Rutas</h2>
                    <hr></hr>
                    <Button variant='warning' ><Link to={'/addRoute'} style={{ textDecoration: 'none' }} >Agregar nueva ruta</Link></Button>
                    <br></br>
                    <br></br>
                    <Row xs={1} md={3} className="g-4">
                        {routes.map((e, i) => (
                            <Col key={i} >
                                <Card>
                                    <Card.Img variant="top" src={e.imagen} />
                                    <Card.Body>
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