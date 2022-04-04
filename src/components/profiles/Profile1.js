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
import profile1 from "../../images/Profile1.jpg";
import profile from "../../images/futurama-leela.png";
import birthday from "../../images/icons8-fecha-de-nacimiento-50.png";
import medalla from '../../images/ciclismo.png'
const Profile1 = () => {
  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        <Card className="text-center" width="40%">
          <CardProfile>
            <hr></hr>
            <img src={profile1} width="50%" alt="epa"></img>
            <br></br>
            <img src={profile} width="4%" alt="epa"></img>
            <h2>ANNI BURGOS</h2>
            <Birthday src={birthday} width="3%" alt="epa"></Birthday>
            <h4 style={{ display: "inline-block", margin: "5px" }}>
              Fecha de Nacimiento
            </h4>
            <p>27 Enero 2022</p>
            <p>
              Hola mundo me encanta pedalear por carretera y competir. Pero en
              esas
              <br></br> carreras no solo cuenta tener las ganas de salir a
              desafiar los trazados, también se vale compartir con la familia y
              con los amigos.
            </p>
            <Rout variant="warning"> Rutas Realizadas
            <img style={{ margin:'3px' }} src={medalla} width="3.5%" alt="epa"></img>
            <strong>
              <Nav.Link  style={{color:'black'}} href="/routes/0">Patios Sopo Bogotá</Nav.Link>
            </strong>
            <strong>
              <Nav.Link  style={{color:'black'}} href="/routes/3">
                {" "}
                Bogotá Embalse San Rafael Bogotá
              </Nav.Link>
            </strong>
            <strong>
              <Nav.Link  style={{color:'black'}} href="/routes/7">Bogotá Faca La Paz</Nav.Link>
            </strong>
            <strong>
              <Nav.Link  style={{color:'black'}} href="/routes/12">Bogotá La Cumbre Bogotá</Nav.Link>
            </strong>
            <strong>
              <Nav.Link  style={{color:'black'}} href="/routes/4">
                Bogota Embalse Sumapaz Bogota
              </Nav.Link>
            </strong>
            </Rout>
            <br></br>
            <RoutCont variant="warning"  href='/chat' >Contactar</RoutCont>

            <hr></hr>
          </CardProfile>
          <CardHeader className="text-muted">Ruta</CardHeader>
        </Card>
      </ContHomeRoad>
      <Footer />
    </div>
  );
};

export default Profile1;
