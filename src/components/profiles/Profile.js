import React from "react";
import {
  Birthday,
  CardHeader,
  CardProfile,
  ContHomeRoad,
  Rout
} from "../../styles/styles";
import Footer from "../Footer";
import Naveg from "../Naveg";
import birthday from "../../images/icons8-fecha-de-nacimiento-50.png";
import { useSelector } from "react-redux";

const Profile = () => {

  const { user } = useSelector((store) => store.user)
  //console.log( user );

  const name = user.length === 0
    ? " Tu perfil "
    : user.displayname

  const profileImg = user.length === 0
    ? "Tu foto"
    : user.photo

    const email = user.length === 0
    ? "Tu correo"
    : user.email

  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        {/* <Card className="text-center" width="40%"> */}
        <CardProfile>
          <img src={profileImg} style={{ borderRadius: '50%' }} alt='profile' width="34%" />
          <br></br>
          <h1>{name}</h1>
          <h6 style={{ display: "inline-block", margin: "5px" }}>
            <h3> {email}</h3>
            Fecha de Nacimiento:
          </h6>
          <h4>17 Enero 1995</h4>
          <h5>
            Amante del ciclismo, Por eso mi pasión por
            las montañas. El deporte me fue transmitido desde siempre,
            recorro cada lugar por donde sea permitido, busco compañía en mi zona para montar .
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
      </ContHomeRoad>
      <Footer />
    </div>
  );
};

export default Profile;


