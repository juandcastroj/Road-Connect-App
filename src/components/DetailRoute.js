import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BtnHomeStyle, ContFirst, ContHomeRoad, DetailContainer, LogoStyle } from '../styles/styles'
import Naveg from './Naveg'
import logo from "../images/cicla.png";
import Footer from './Footer';

const DetailRoute = () => {

    const { id } = useParams()
    const [ruta, setRuta] = useState([])
    const [loading, setLoading] = useState(false)

    const getRoutes = async () => {
        setLoading(true)
        const resp = await fetch(`https://routesdata.herokuapp.com/coordenadas/${id}`)
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
                            <img alt='fotoruta' width='40%' src={ruta.img1} style={{ margin: '20px' }} />
                            <img alt='maparuta' width='40%' src={ruta.img} />
                        </div>
                        <DetailContainer  >
                            <h2>{ruta.name}</h2>
                            <hr></hr>
                            <div>
                                Distancia: <h4>{ruta.Distancia}</h4>
                                Desnivel: <h4>{ruta.Desnivel}</h4>
                                Tiempo promedio: <h4>{ruta.Tiempo}</h4>
                                Dificultad: <h4>{ruta.Dificultad}</h4>
                                <BtnHomeStyle variant='warning' style={{ padding: '1rem' }} ><Link to={'/createroute'} style={{textDecoration:'none'}} >Empezar</Link></BtnHomeStyle>
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