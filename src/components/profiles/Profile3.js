import React from "react";
import { Nav, Card } from "react-bootstrap";
import {
  ContHomeRoad,
  Rout,
  RoutCont,
  Birthday,
  CardProfile,
} from "../../styles/styles";
import Footer from "../Footer";
import Naveg from "../Naveg";
import profile3 from "../../images/Profile3.jpg";
import profile from "../../images/futurama-fry-.png";
import birthday from "../../images/icons8-fecha-de-nacimiento-50.png";
const Profile3 = () => {
  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        <Card className="text-center" width="40%">
          <Card.Header>Mi Perfil</Card.Header>
          <CardProfile>
            <img src={profile3} width="50%" alt="epa"></img>
            <hr></hr>
            <img src={profile} width="4%" alt="epa"></img>
            <h2>JUAN CORTES</h2>
            <Birthday src={birthday} width="3%" alt="epa"></Birthday>
            <h4 style={{ display: "inline-block" }}>Fecha de Nacimiento</h4>
            <p>11 Agosto 2022</p>
            <p>
              Me intesa salir a rodar a lugares montañoso con dificultad alta
              cada dia <br></br> superando mis límites, si te gusta el desafio
              animate y rodamos juntos
            </p>
            <Rout variant="warning"> Rutas Realizadas</Rout>
            <Nav.Link href="/routes/2">Patios Sopo Bogotá</Nav.Link>
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
  );
};

export default Profile3;
