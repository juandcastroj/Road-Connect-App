import React from "react";
import {Nav, Card } from "react-bootstrap";
import { Birthday, CardProfile, ContHomeRoad, Rout, RoutCont } from "../../styles/styles";
import Footer from "../Footer";
import Naveg from "../Naveg";
import profile1 from "../../images/Profile1.jpg";
import profile from '../../images/futurama-fry-.png'
import birthday from '../../images/icons8-fecha-de-nacimiento-50.png'

const Profile1 = () => {
  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        <Card className="text-center" width="40%">
          <Card.Header>Mi Perfil</Card.Header>
          <CardProfile>
            <img src={profile1} width="50%"  alt="epa"></img>
            <hr></hr>
            <img src={profile} width="4%" alt="epa"></img>
            <h2>ANNI BURGOS</h2>
            <Birthday src={birthday} width="3%" alt="epa"></Birthday>
            <h4   style={{display: 'inline-block' ,margin:'5px'}}>Fecha de Nacimiento</h4>
            <p>27 Enero 2022</p>
            <p>
            Hola mundo me encanta pedalear por carretera y competir. Pero en esas
            <br></br>  carreras no solo cuenta tener las ganas de salir a desafiar los
              trazados, también se vale compartir con la familia y con los amigos.
            </p>
            <Rout variant="warning"> Rutas Realizadas</Rout>
            <Nav.Link href="/routes/0">Patios Sopo Bogotá</Nav.Link>
            <Nav.Link href="/routes/3"> Bogotá Embalse San Rafael Bogotá</Nav.Link>
            <Nav.Link href="/routes/7">Bogotá Faca La Paz</Nav.Link>
            <Nav.Link href="/routes/12">Bogotá La Cumbre Bogotá</Nav.Link>
            <Nav.Link href="/routes/4">Bogota Embalse Sumapaz Bogota</Nav.Link>
            <hr></hr>
            <RoutCont variant="warning">Contactar</RoutCont>
          </CardProfile>
          <Card.Footer className="text-muted">Ruta</Card.Footer>
        </Card>
      </ContHomeRoad>
      <Footer />
    </div>
  );
};

export default Profile1;
