import React from 'react'
import { Nav, Card } from 'react-bootstrap'
import { ContHomeRoad ,CardHeader, Rout, RoutCont, Birthday, CardProfile} from "../../styles/styles";import Footer from '../Footer'
import Naveg from '../Naveg'
import profile4 from '../../images/Profile4.jpg'
import profile from '../../images/futurama-fry-.png'
import birthday from '../../images/icons8-fecha-de-nacimiento-50.png'
import medalla from '../../images/ciclismo.png'

const Profile4 = () => {

    return (

        <div>
            <Naveg />
            <ContHomeRoad>
                <Card className="text-center" width='40%' >
                    <CardHeader>MI PERFIL</CardHeader>
                    <CardProfile>
                    <hr></hr>
            <img src={profile4} width="50%"  alt="epa"></img>
            <br></br>
            <img src={profile} width="4%" alt="epa"></img>
            <h2>OSCAR HERNANDEZ</h2>
            <Birthday src={birthday} width="3%" alt="epa"></Birthday>
            <h4   style={{display: 'inline-block' ,margin:'5px'}}>Fecha de Nacimiento</h4>
            <p>13 Abril 2022</p>
            <p>Amo esta app porque puedo encontrar personas cerca y <br></br> conocer gente
                estupenda llena de vida y alegria donde demuestran su disciplina
                al rodar
            </p>
            <Rout variant="warning"> Rutas Realizadas</Rout> 
             <img style={{ margin:'3px' }} src={medalla} width="3.5%" alt="epa"></img>
            <strong><Nav.Link  style={{color:'black'}} href="/routes/11">Bogotá Tabio Bogotá</Nav.Link></strong>
            <strong><Nav.Link  style={{color:'black'}} href="/routes/5">Bogota Cerro Guadalupe Bogota</Nav.Link></strong>
            <br></br>
            <RoutCont variant="warning">Contactar</RoutCont>
            <hr></hr>
          </CardProfile>
                    <CardHeader className="text-muted">MTB y Ruta</CardHeader>
                </Card>
            </ContHomeRoad>
            <Footer />
        </div>
    )
}

export default Profile4