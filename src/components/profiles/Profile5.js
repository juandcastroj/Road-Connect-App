import React from "react";
import {Nav, Card } from "react-bootstrap";
import {
  Birthday,
  CardProfile,
  ContHomeRoad,
  CardHeader,
  Rout,
  RoutCont,
} from "../../styles/styles";
import Footer from "../Footer";
import Naveg from "../Naveg";
import profile5 from "../../images/Profile5.jpg";
import profile from "../../images/futurama-fry-.png";
import birthday from "../../images/icons8-fecha-de-nacimiento-50.png";
import medalla from '../../images/ciclismo.png'

const Profile5 = () => {
  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        <Card className="text-center" width="40%">
          <CardHeader>MI PERFIL</CardHeader>
          <CardProfile>
          <hr></hr>
            <img src={profile5} width="50%" alt="epa"></img>
            <br></br>
            <img src={profile} width="4%" alt="epa"></img>
            <h2>FELIPE CASTRO</h2>
            <Birthday src={birthday} width="3%" alt="epa"></Birthday>
            <h4 style={{ display: "inline-block"  ,margin:'5px'}}>Fecha de Nacimiento</h4>
            <p>10 Noviembre 2022</p>
            <p>
              Ciclista de 28 años, me interesa salir con personas que mas que dar pedal; disfruten{" "}
              <br></br> del paisaje de cada ruta y el sudor de llegar mas
              lejos cada vez.
            </p>
            <Rout variant="warning"> Rutas Realizadas</Rout>
            <img style={{ margin:'3px' }} src={medalla} width="3.5%" alt="epa"></img>
            <strong><Nav.Link style={{color:'black'}} href="/routes/13">Bogotá La Capilla Bogotá</Nav.Link></strong>
            <strong><Nav.Link style={{color:'black'}} href="/routes/4">Bogotá Tenjo Bogotá</Nav.Link></strong>
            <strong><Nav.Link style={{color:'black'}} href="/routes/1">Bogotá Altos de Patio</Nav.Link></strong>
            <strong><Nav.Link style={{color:'black'}} href="/routes/2">Patios Sopó Bogotá</Nav.Link></strong>
            <br></br>
            <RoutCont variant="warning">Contactar</RoutCont>
            <hr></hr>
          </CardProfile>
          <CardHeader className="text-muted">MTB y Ruta</CardHeader>
        </Card>
      </ContHomeRoad>
      <Footer />
    </div>
  );
};

export default Profile5;
