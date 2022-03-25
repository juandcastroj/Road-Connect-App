import React, { useEffect } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteAsync, listRouteAsync } from '../actions/actionRoutes'
import { ContHomeRoad } from '../styles/styles'
import Naveg from './Naveg'

const MyRoutes = () => {

    const dispatch = useDispatch()
    const { routes } = useSelector(store => store.routes)
    //console.log(routes);
  
    useEffect(() => {
      dispatch(listRouteAsync())
   }, [dispatch])

  return (
    <div>
         <Naveg/> 
              <ContHomeRoad>
            <h2 style={{color: 'yellow'}} >Mis Rutas</h2>
            <hr></hr>
            <Button variant='warning' ><Link to={'/addRoute'} style={{textDecoration:'none'}} >Agregar nueva ruta</Link></Button>
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
                                   <h6>distancia: {e.distancia}</h6>
                                   <h6>desnivel positivo: {e.desnivel}</h6>
                                   <h6>tiempo promedio: {e.tiempo}</h6>
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

export default MyRoutes