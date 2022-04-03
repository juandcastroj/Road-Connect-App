import React from 'react'
import { Nav, Card } from 'react-bootstrap'
import { ContHomeRoad , Rout, RoutCont, Birthday, CardProfile} from "../../styles/styles";import Footer from '../Footer'
import Naveg from '../Naveg'
import profile4 from '../../images/Profile4.jpg'
import profile from '../../images/futurama-fry-.png'
import birthday from '../../images/icons8-fecha-de-nacimiento-50.png'

const Profile4 = () => {

    return (

        <div>
            <Naveg />
            <ContHomeRoad>
                <Card className="text-center" width='40%' >
                    <Card.Header>Mi Perfil</Card.Header>
                    <CardProfile>
            <img src={profile4} width="50%"  alt="epa"></img>
            <hr></hr>
            <img src={profile} width="4%" alt="epa"></img>
            <h2>OSCAR HERNANDEZ</h2>
            <Birthday src={birthday} width="3%" alt="epa"></Birthday>
            <h4   style={{display: 'inline-block'}}>Fecha de Nacimiento</h4>
            <p>13 Abril 2022</p>
            <p>Amo esta app porque puedo encontrar personas cerca y <br></br> conocer gente
                estupenda llena de vida y alegria donde demuestran su disciplina
                al rodar
            </p>
            <Rout variant="warning"> Rutas Realizadas</Rout> 
            <Nav.Link href="/routes/11">Bogotá Tabio Bogotá</Nav.Link>
            <Nav.Link href="/routes/5">Bogota Cerro Guadalupe Bogota</Nav.Link>
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

export default Profile4