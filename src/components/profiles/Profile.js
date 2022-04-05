import React from "react";
import { Card, Nav } from "react-bootstrap";
import {
  Birthday,
  CardHeader,
  CardProfile,
  ContHomeRoad,
  Rout
} from "../../styles/styles";
import Footer from "../Footer";
import Naveg from "../Naveg";
import profile8 from "../../images/Profile8.jpg";
import profile from "../../images/futurama-leela.png";
import birthday from "../../images/icons8-fecha-de-nacimiento-50.png";
import medalla from '../../images/ciclismo.png'
const Profile8 = () => {
  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        <Card className="text-center" width="40%">
          <CardProfile>
            <img src={profile8} width="50%" alt="epa"></img>
            <br></br>
            <img src={profile} width="4%" alt="epa"></img>
            <h2>ANDREA MORENO</h2>
            <Birthday src={birthday} width="3%" alt="epa"></Birthday>
            <h4 style={{ display: "inline-block", margin: "5px" }}>
              Fecha de Nacimiento
            </h4>
            <h3>27 Enero 1998</h3>
            <h5>
              Hija de padres aficionados del ciclismo. Por tanto, esa pasión por
              las montañas <br></br>y el deporte me fue transmitido desde muy niña,
               y ahora recorro cada lugar por donde ellos cruzarón pero busco compañía en mi zona.
            </h5>
            <Rout variant="warning"> <h5>Rutas Realizadas</h5>

              <img style={{ margin: '3px' }} src={medalla} width="3.5%" alt="epa"></img>

              <strong>
                <Nav.Link style={{ color: "black" }} href="/routes/1">
                  Bogota Alto de Patios
                </Nav.Link>
                <Nav.Link style={{ color: "black" }} href="/routes/0">
                  Bogota La Vega Bogota
                </Nav.Link>
                <Nav.Link style={{ color: "black" }} href="/routes/4">
                  {" "}
                  Bogota Embalse Sumapaz Bogota
                </Nav.Link>
              </strong>
            </Rout>
          </CardProfile>
          <CardHeader className="text-muted">MTB y Ruta</CardHeader>
        </Card>
      </ContHomeRoad>
      <Footer />
    </div>
  );
};

export default Profile8;


