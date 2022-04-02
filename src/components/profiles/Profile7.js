import React from "react";
import { Card, Nav } from "react-bootstrap";
import {
  Birthday,
  CardProfile,
  ContHomeRoad,
  Rout,
  RoutCont,
} from "../../styles/styles";
import Footer from "../Footer";
import Naveg from "../Naveg";
import profile7 from "../../images/Profile7.jpg";
import profile from "../../images/futurama-fry-.png";
import birthday from "../../images/icons8-fecha-de-nacimiento-50.png";

const Profile7 = () => {
  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        <Card className="text-center" width="40%">
          <Card.Header >Mi Perfil</Card.Header>
          <CardProfile>
            <img src={profile7} width="30%" alt="epa"></img>
            <hr></hr>
            <img src={profile} width="4%" alt="epa"></img>
            <h2 >FERNANDO MONTES</h2>
            <Birthday src={birthday}  width="3%" alt="epa"></Birthday>
            <h4  style={{display: 'inline-block'}} >Fecha de Nacimiento</h4>
            <p>25 Agosto 2022</p>
            <p>
              Soy una persona apasionada por las ciclas por los paisajes y por
              la naturaleza, <br></br>salgo a rodar cada vez que tengo la
              oportunidad de participar en un evento.
            </p>
            <Rout variant="warning"> Rutas Realizadas</Rout>
            <Nav.Link href="/routes/11">Bogotá Tabio Bogotá</Nav.Link>
            <Nav.Link href="/routes/9">Bogota Bojaca Bogota</Nav.Link>

           
            <hr></hr>
            <RoutCont variant="warning">Contactar</RoutCont>
          </CardProfile>
          <Card.Footer className="text-muted">MTB y Ruta</Card.Footer>
        </Card>
      </ContHomeRoad>
      <Footer />
    </div>
  );
};

export default Profile7;
