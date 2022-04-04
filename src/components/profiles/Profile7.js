import React from "react";
import { Card, Nav } from "react-bootstrap";
import {
  Birthday,
  CardProfile,
  ContHomeRoad,
  Rout,
  RoutCont,
  CardHeader
} from "../../styles/styles";
import Footer from "../Footer";
import Naveg from "../Naveg";
import profile7 from "../../images/Profile7.jpg";
import profile from "../../images/futurama-fry-.png";
import birthday from "../../images/icons8-fecha-de-nacimiento-50.png";
import medalla from '../../images/ciclismo.png'

const Profile7 = () => {
  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        <Card className="text-center" width="40%">
          <CardProfile>
            <hr></hr>
            <img src={profile7} width="30%" alt="epa"></img>
            <br></br>
            <img src={profile} width="4%" alt="epa"></img>
            <h2 >FERNANDO MONTES</h2>
            <Birthday src={birthday} width="3%" alt="epa"></Birthday>
            <h4 style={{ display: 'inline-block', margin: '5px' }} >Fecha de Nacimiento</h4>
            <p>25 Agosto 2022</p>
            <p>
              Soy una persona apasionada por las ciclas por los paisajes y por
              la naturaleza, <br></br>salgo a rodar cada vez que tengo la
              oportunidad de participar en un evento.
            </p>
            <Rout variant="warning"> Rutas Realizadas
              <img style={{ margin: '3px' }} src={medalla} width="3.5%" alt="epa"></img>
              <strong><Nav.Link style={{ color: 'black' }} href="/routes/11">Bogotá Tabio Bogotá</Nav.Link></strong>
              <strong><Nav.Link style={{ color: 'black' }} href="/routes/9">Bogota Bojaca Bogota</Nav.Link></strong>
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
  );
};

export default Profile7;
