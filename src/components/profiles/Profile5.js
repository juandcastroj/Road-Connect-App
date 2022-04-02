import React from "react";
import {Nav, Card } from "react-bootstrap";
import {
  Birthday,
  CardProfile,
  ContHomeRoad,
  Rout,
  RoutCont,
} from "../../styles/styles";
import Footer from "../Footer";
import Naveg from "../Naveg";
import profile5 from "../../images/Profile5.jpg";
import profile from "../../images/futurama-fry-.png";
import birthday from "../../images/icons8-fecha-de-nacimiento-50.png";

const Profile5 = () => {
  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        <Card className="text-center" width="40%">
          <Card.Header>Mi Perfil</Card.Header>
          <CardProfile>
            <img src={profile5} width="50%" alt="epa"></img>
            <hr></hr>
            <img src={profile} width="4%" alt="epa"></img>
            <h2>FELIPE CASTRO</h2>
            <Birthday src={birthday} width="3%" alt="epa"></Birthday>
            <h4 style={{ display: "inline-block" }}>Fecha de Nacimiento</h4>
            <p>10 Noviembre 2022</p>
            <p>
              Ciclista de 28 años, me interesa salir con personas que mas que dar pedal; disfruten{" "}
              <br></br> del paisaje de cada ruta y el sudor de llegar mas
              lejos cada vez.
            </p>
            <Rout variant="warning"> Rutas Realizadas</Rout>
            <Nav.Link href="/routes/13">Bogotá La Capilla Bogotá</Nav.Link>
            <Nav.Link href="/routes/4">Bogotá Tenjo Bogotá</Nav.Link>
            <Nav.Link href="/routes/1">Bogotá Altos de Patio</Nav.Link>
            <Nav.Link href="/routes/2">Patios Sopó Bogotá</Nav.Link>
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

export default Profile5;
