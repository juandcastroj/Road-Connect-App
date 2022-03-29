import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { ContHomeRoad, LogoStyle } from '../styles/styles'
import Naveg from './Naveg'
import logo from "../images/cicla.png";

const RoutesHome = () => {

    const initialState = []
    const api = 'https://demoaday.herokuapp.com/Rutas'
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState(data)

    const getData = async () => {
        setLoading(true)
        const resp = await fetch(api)
        //const data = await resp.json()
        setData(await resp.clone().json())
        setFilter(await resp.json())
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    const Loading = () => <LogoStyle alt='first-logo' src={logo} />

    const filterRoute = (dif) => {
        const updateList = data.filter((x)  => x.Dificultad === dif )
        setFilter(updateList)
    }

    const ShowRoutes = () => {
        
        return (
                < >
                    <Naveg />
                    <ContHomeRoad>
                <div style={{ padding: '1rem' }}  >
                    <Button variant='warning' style={{ margin: '1rem' }} 
                    onClick={() => setFilter(data)} > Todas </Button>
                    <Button variant='warning' style={{ margin: '1rem' }}
                    onClick={ () => filterRoute( "Principiante" ) } > Principiante </Button>
                    <Button variant='warning' style={{ margin: '1rem' }} 
                     onClick={ () => filterRoute( "Avanzado" ) }> Avanzado </Button>
                    <Button variant='warning' style={{ margin: '1rem' }} 
                     onClick={ () => filterRoute( "Experto" ) }> Experto </Button>
                    <Button variant='warning' style={{ margin: '1rem' }} 
                     onClick={ () => filterRoute( "Elite" ) }> Elite </Button>
                </div>
                <hr></hr>
                        <Row xs={1} md={4} className="g-4">
                            {filter.map((e, i) => (
                                <Col key={i} >
                                    <Card style={{heigth: '700px'}} >
                                        <Card.Img variant="top" src={e.img} />
                                        <Card.Body>
                                            <Card.Title>{e.name}</Card.Title>
                                            {/* <Card.Text>
                                               distancia: <h6>{e.Distancia}</h6>
                                               {/* Desnivel: <h6>{e.Desnivel}</h6> */}
                                               {/* tiempo promedio: <h6>{e.Tiempo}</h6>
                                               dificultad: <h6>{e.Dificultad}</h6>
                                            </Card.Text>  */}
                                            <NavLink to={`/routes/${e.id}`} className='btn btn-outline-warning'  >Detalle</NavLink>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </ContHomeRoad>
                </>       
        )
    }

    return (
            <div >
                {loading ? <Loading /> : <ShowRoutes/>}
            </div>         
    )
}

export default RoutesHome