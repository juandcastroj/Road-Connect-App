import React from "react";
import { Nav, Card } from "react-bootstrap";
import {
  Birthday,
  CardProfile,
  ContHomeRoad,
  Rout,
  RoutCont,
} from "../../styles/styles";
import Footer from "../Footer";
import Naveg from "../Naveg";
import profile2 from "../../images/Profile2.jpg";
import profile from "../../images/futurama-leela.png";
import birthday from "../../images/icons8-fecha-de-nacimiento-50.png";

const Profile2 = () => {
  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        <Card className="text-center" width="40%">
          <Card.Header>Mi Perfil</Card.Header>
          <CardProfile>
            <img src={profile2} width="50%" alt="epa"></img>
            <hr></hr>
            <img src={profile} width="4%" alt="epa"></img>
            <h2>ANDREA MORENO</h2>
            <Birthday src={birthday} width="3%" alt="epa"></Birthday>
            <h4 style={{ display: "inline-block" ,margin:'5px' }}>Fecha de Nacimiento</h4>
            <p>27 Enero 2022</p>
            <p>
              Hijo de padres aficionados del ciclismo. Por tanto, esa pasión por
              las montañas <br></br>y el deporte me fue transmitido desde bien
              pequeño, y ahora recorro cada lugar por donde ellos cruzarón.
            </p>
            <Rout variant="warning"> Rutas Realizadas</Rout>
            <Nav.Link href="/routes/3">Patios Sopo Bogotá</Nav.Link>
            <Nav.Link href="/routes/14">Bogotá Embalse San Rafael Bogotá</Nav.Link>
            <Nav.Link href="/routes/5">Bogotá Tenjo Bogotá</Nav.Link>
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

export default Profile2;
