import React from "react";
import { Nav, Card } from "react-bootstrap";
import {
  Birthday,
  CardProfile,
  ContHomeRoad,
  Rout,
  CardHeader,
  RoutCont,
} from "../../styles/styles";
import Footer from "../Footer";
import Naveg from "../Naveg";
import profile2 from "../../images/Profile2.jpg";
import profile from "../../images/futurama-leela.png";
import birthday from "../../images/icons8-fecha-de-nacimiento-50.png";
import medalla from '../../images/ciclismo.png'

const Profile2 = () => {
  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        <Card className="text-center" width="40%">
          <Card.Header>MI PERFIL</Card.Header>
          <CardProfile>
            <hr></hr>
            <img src={profile2} width="50%" alt="epa"></img>

            <br></br>
            <img src={profile} width="4%" alt="epa"></img>
            <h2>MONICA MONTES</h2>
            <Birthday src={birthday} width="3%" alt="epa"></Birthday>
            <h4 style={{ display: "inline-block", margin: "5px" }}>
              Fecha de Nacimiento
            </h4>
            <p>04 Marzo 2022</p>
            <p>
              Soy de Bogotá y recorro sus alrededores cada dia <br></br>
              exigiendome mas y conociendo lugares y personas increibles.
            </p>

            <Rout variant="warning"> Rutas Realizadas</Rout>
            <img style={{ margin:'3px' }} src={medalla} width="3.5%" alt="epa"></img>
            <strong>
              <Nav.Link  style={{color:'black'}} href="/routes/3">Patios Sopo Bogotá</Nav.Link>
            </strong>
            <strong>
              <Nav.Link  style={{color:'black'}} href="/routes/14">
                Bogotá Embalse San Rafael Bogotá
              </Nav.Link>
            </strong>
            <strong>
            
              <Nav.Link style={{color:'black'}} href="/routes/5">Bogotá Tenjo Bogotá</Nav.Link>
            </strong>
            <br></br>
            <RoutCont  variant="warning">Contactar</RoutCont>
            <hr></hr>
          </CardProfile>
          <CardHeader className="text-muted">MTB y Ruta</CardHeader>
        </Card>
      </ContHomeRoad>
      <Footer />
    </div>
  );
};

export default Profile2;
