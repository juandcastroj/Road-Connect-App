import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { ContHomeRoad } from '../styles/styles'
import Naveg from './Naveg'
import NavRoutes from './NavRoutes'

const RoutesHome = () => {

    const initialState = []
    const api = 'https://roadconntact.herokuapp.com/Rutas'
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)
    //const [filter, setFilter] = useState(data)

    const getData = async () => {
        setLoading(true)
        const resp = await fetch(api)
        const data = await resp.json()
        //const rutas = await resp.json()
        //console.log(rutas);
        setData(data)
        //setFilter(await resp.json())
        setLoading(false)
        console.log(data);
    }

    useEffect(() => {
        getData()
    }, [])

    const Loading = () => <h3>Loading...</h3>

    const ShowRoutes = () => {
        
        return (
            <>
                <div>
                    <Naveg />
                    <NavRoutes />
                    <ContHomeRoad>
                        <h2 style={{ color: 'yellow' }} >Rutas Populares</h2>
                        <hr></hr>
                        <Row xs={1} md={3} className="g-4">
                            {data.map((e, i) => (
                                <Col key={i} >
                                    <Card>
                                        <Card.Img variant="top" src={e.img} />
                                        <Card.Body>
                                            <Card.Title>{e.name}</Card.Title>
                                            <Card.Text>
                                               {e.position}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </ContHomeRoad>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className='container' >
                {loading ? <Loading /> : <ShowRoutes/>}
            </div>
        </div>          
    )
}

export default RoutesHome