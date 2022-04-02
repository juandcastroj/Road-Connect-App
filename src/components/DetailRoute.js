import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContFirst, ContHomeRoad, DetailContainer, LogoStyle } from '../styles/styles'
import Naveg from './Naveg'
import logo from "../images/cicla.png";
import Footer from './Footer';
import { Button } from 'react-bootstrap';
const DetailRoute = () => {

    const { id } = useParams()
    const [ruta, setRuta] = useState([])
    const [loading, setLoading] = useState(false)

    const getRoutes = async () => {
        setLoading(true)
        const resp = await fetch(`https://project-demoday.herokuapp.com/Rutas/${id}`)
        setRuta(await resp.json())
        setLoading(false)
    }

    useEffect(() => {
        getRoutes()
    }, [])

    const Loading = () => {
        return (
            <ContFirst>
                <LogoStyle alt='first-logo' src={logo} />
            </ContFirst>
        )
    }

    const ShowRoute = () => {
        return (
            <div>
                <ContHomeRoad>
                    <div >
                        <div style={{ padding: '0.4rem' }} >
                            <img alt='map' width={600} src={ruta.img1} style={{ margin: '20px' }} />
                            <img alt='map' width={600} src={ruta.img} />
                        </div>
                        <DetailContainer  >
                            <h4>{ruta.name}</h4>
                            <hr></hr>
                            <div>
                                Distancia: <h5>{ruta.Distancia}</h5>
                                Desnivel: <h5>{ruta.Desnivel}</h5>
                                Tiempo promedio: <h5>{ruta.Tiempo}</h5>
                                Dificultad: <h5>{ruta.Dificultad}</h5>
                                <Button variant='warning' href='/Location' style={{ padding: '1rem' }} >Empezar</Button>
                            </div>
                        </DetailContainer>
                    </div>
                </ContHomeRoad>
                <Footer />
            </div>
        )
    }

    return (
        <div>
            <Naveg />
            {loading ? <Loading /> : <ShowRoute />}
        </div>
    )
}

export default DetailRoute