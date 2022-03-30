import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContFirst, ContHomeRoad, DetailContainer , LogoStyle} from '../styles/styles'
import Naveg from './Naveg'
import logo from "../images/cicla.png";
const DetailRoute = () => {

    const { id } = useParams()
    const [ruta, setRuta] = useState([])
    const [loading, setLoading] = useState(false)

    const getRoutes = async () => {
        setLoading(true)
        const resp = await fetch(`https://demoaday.herokuapp.com/Rutas/${id}`)
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
                        <img alt='map' width={400} src={ruta.img} style={{ display: 'inline-block' }} />
                        <DetailContainer  >
                            <h4>{ruta.name}</h4>
                            <hr></hr>
                            <div>
                                distancia: <h6>{ruta.Distancia}</h6>
                                Desnivel: <h6>{ruta.Desnivel}</h6>
                                tiempo promedio: <h6>{ruta.Tiempo}</h6>
                                dificultad: <h6>{ruta.Dificultad}</h6>
                            </div>
                        </DetailContainer>
                    </div>
                </ContHomeRoad>
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