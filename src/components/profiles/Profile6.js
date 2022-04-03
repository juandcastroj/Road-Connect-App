import React from 'react'
import {  Card, Nav } from 'react-bootstrap'
import { Birthday, CardProfile, ContHomeRoad, Rout, RoutCont } from '../../styles/styles'
import Footer from '../Footer'
import Naveg from '../Naveg'
import profile6 from '../../images/profile6.jpg'
import profile from '../../images/futurama-fry-.png'
import birthday from '../../images/icons8-fecha-de-nacimiento-50.png'

const Profile6 = () => {

    return (

        <div>
            <Naveg />
            <ContHomeRoad>
                <Card className="text-center" width='40%' >
                    <Card.Header>Mi Perfil</Card.Header>
                    <CardProfile>
            <img src={profile6} width="50%"  alt="epa"></img>
            <hr></hr>
            <img src={profile} width="4%" alt="epa"></img>
            <h2>Monic</h2>
            <Birthday src={birthday} width="3%" alt="epa"></Birthday>
            <h4   style={{display: 'inline-block' ,margin:'5px'}}>Fecha de Nacimiento</h4>
            <p>11 Agosto 2022</p>
            <p>
              Siempre que quiero salir a rodar no encuentro con quien hacerlo, pero 
              desde que estoy co esta app siempre hay alguien con quien salir a dar pedal. 
              
            </p>
            <Rout variant="warning"> Rutas Realizadas</Rout>
            <Nav.Link href="/routes/11">Bogotá Tabio Bogotá</Nav.Link>
            <Nav.Link href="/routes/4">Bogotá Tenjo Bogotá</Nav.Link>
            <hr></hr>
            <RoutCont variant="warning">Contactar</RoutCont>
          </CardProfile>
                    <Card.Footer className="text-muted">MTB y Ruta</Card.Footer>
                </Card>
            </ContHomeRoad>
            <Footer />
        </div>
    )
}

export default Profile6