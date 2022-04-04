import React from 'react'
import { Card, Nav } from 'react-bootstrap'
import { Birthday, CardHeader, CardProfile, ContHomeRoad, Rout, RoutCont } from '../../styles/styles'
import Footer from '../Footer'
import Naveg from '../Naveg'
import profile6 from '../../images/profile6.jpg'
import profile from '../../images/futurama-fry-.png'
import birthday from '../../images/icons8-fecha-de-nacimiento-50.png'
import medalla from '../../images/ciclismo.png'

const Profile6 = () => {

    return (

        <div>
            <Naveg />
            <ContHomeRoad>
                <Card className="text-center" width='40%' >
                    <CardProfile>
                        <hr></hr>
                        <img src={profile6} width="50%" alt="epa"></img>
                        <br></br>
                        <img src={profile} width="4%" alt="epa"></img>
                        <h2>RODOLFO ROJAS</h2>
                        <Birthday src={birthday} width="3%" alt="epa"></Birthday>
                        <h4 style={{ display: 'inline-block', margin: '5px' }}>Fecha de Nacimiento</h4>
                        <p>19 Agosto 2022</p>
                        <p>
                            Siempre que quiero salir a rodar no encuentro con quien hacerlo, pero <br></br>
                            desde que estoy co esta app siempre hay alguien con quien salir a dar pedal.

                        </p>
                        <Rout variant="warning"> Rutas Realizadas
                            <img style={{ margin: '3px' }} src={medalla} width="3.5%" alt="epa"></img>
                            <strong><Nav.Link style={{ color: 'black' }} href="/routes/11">Bogotá Tabio Bogotá</Nav.Link></strong>
                            <strong><Nav.Link style={{ color: 'black' }} href="/routes/4">Bogotá Tenjo Bogotá</Nav.Link></strong>
                        </Rout>
                        <br></br>
                        <RoutCont variant="warning" href='/chat' >Contactar</RoutCont>
                        <hr></hr>
                    </CardProfile>
                    <CardHeader className="text-muted">MTB y Ruta</CardHeader>
                </Card>
            </ContHomeRoad>
            <Footer />
        </div>
    )
}

export default Profile6