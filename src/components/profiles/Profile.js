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
import { useSelector } from "react-redux";



const Profile = () => {

  const { user } = useSelector((store) => store.user)
  //console.log( user );

  const name = user.length === 0
      ? " Tu perfil "
      :  user.displayname 

  const profileImg = user.length === 0 
      ? "Tu foto" 
      : user.photo 


  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        {/* <Card className="text-center" width="40%"> */}
          <CardProfile>
            <img src={profileImg} style={{borderRadius:'25%'}}  alt='profile' width="35%" /> 
            <br></br>
            <h1>{name}</h1>
            <Birthday src={birthday} width="3%" alt="epa"></Birthday>
            <h5 style={{ display: "inline-block", margin: "5px" }}>
              Fecha de Nacimiento
            </h5>
            <h4>27 Enero 1998</h4>
            <h5>
              Hija de padres aficionados del ciclismo. Por tanto, esa pasión por
              las montañas <br></br>y el deporte me fue transmitido desde muy niña,
               y ahora recorro cada lugar por donde ellos cruzarón pero busco compañía en mi zona.
            </h5>
            {/* <Rout variant="warning"> <h4>Rutas Realizadas</h4>

              <img src={medalla} width="7%" alt="epa"></img>

              <strong>
                <Nav.Link style={{ color: "black" }} href="/routes/1">
                  <h5>Bogota Alto de Patios</h5>
                </Nav.Link>
                <Nav.Link style={{ color: "black" }} href="/routes/0">
                  <h5>Bogota La Vega Bogota</h5>
                </Nav.Link>
                <Nav.Link style={{ color: "black" }} href="/routes/4">
                  {" "}
                  <h5>Bogota Embalse Sumapaz Bogota</h5>
                </Nav.Link>
              </strong>
            </Rout> */}
          </CardProfile>
          {/* <CardHeader className="text-muted">MTB y Ruta</CardHeader> */}
        {/* </Card> */}
      </ContHomeRoad>
      <Footer />
    </div>
  );
};

export default Profile;


