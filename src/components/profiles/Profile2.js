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
import { Link } from "react-router-dom";

const Profile2 = () => {
  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        <Card className="text-center" width="40%">
          <CardProfile>
            <img src={profile2} width="50%" alt="epa"></img>
            <br></br>
            <img src={profile} width="4%" alt="epa"></img>
            <h2>MONICA MONTES</h2>
            <Birthday src={birthday} width="3%" alt="epa"></Birthday>
            <h4 style={{ display: "inline-block", margin: "5px" }}>
              Fecha de Nacimiento
            </h4>
            <h3>04 Marzo 2000</h3>
            <h5>
              Soy de Bogotá y recorro sus alrededores cada dia <br></br>
              exigiendome mas y conociendo lugares y personas increibles.
            </h5>
            <Rout variant="warning"> <h4>Rutas Realizadas</h4>
            <img style={{ margin:'3px' }} src={medalla} width="3.5%" alt="epa"></img>
            <strong>
              <Nav.Link  style={{color:'black'}} href="/routes/3"><h5>Bogota Embalse Sumapaz Bogota</h5></Nav.Link>
            </strong>
            <strong>
              <Nav.Link  style={{color:'black'}} href="/routes/14">
                <h5>Bogotá Embalse San Rafael Bogotá</h5>
              </Nav.Link>
            </strong>
            <strong>
              <Nav.Link style={{color:'black'}} href="/routes/5"><h5>Bogotá Tenjo Bogotá</h5></Nav.Link>
            </strong>
            </Rout>
            <br></br>
            <RoutCont  variant="warning" ><Link to={'/chat'} style={{textDecoration:'none'}}  >Contactar</Link></RoutCont>
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
