import React from "react";
import { Card, Image } from "react-bootstrap";
import { BtnHomeStyle, CardEvent, ContHomeRoad } from "../styles/styles";
import Naveg from "./Naveg";
import event1 from "../images/evento1.jpg";
import event2 from "../images/event02.jpg";
import event3 from "../images/evento3.jpg";
import Footer from "./Footer";
import swal from "sweetalert";

const Events = () => {

  const mostrarAlerta = () => {
    swal(" Felicidades, pronto el Organizador se comunicará contigo. ");
  }

  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        <h2 style={{ color: "yellow" }}>Próximos Eventos</h2>
       
        <hr></hr>
        <Card className="text-center">
          <CardEvent>Organizado por: Escarabajos Bogotá</CardEvent>
          <Card.Body>
            <Image
              style={{ webkitBoxShadow: "0px 0px 10px 10px #0030b7" }}
              src={event2}
              width='60%'
            ></Image>
            <Card.Text>
              <h2 style={{ margin: "25px" }}>
                Bogotá a Chipaque por PNN SUMAPAZ,<br></br> Une, Cáqueza, Fosca,
                Gutierrez, Guayabetal
              </h2>
              <h4>Fecha: 22 Abril 2022</h4>
              <strong><h6>
                Distancia:190,62 km,
                Desnivel positivo: 5.856 m,
                Tiempo: 8 horas,
                Dificultad: Experto
              </h6></strong>
              <h6>
                Todo el trayecto estarás acompañado por ciclomontañistas
                experimentados quienes estarán atentos a los requerimientos de
                los participantes. <br></br>TRANSPORTE: Se prestará el servicio
                de transporte en vans con racks para los participantes y sus
                bicicletas.<br></br> La van saldrá en la mañana desde el punto
                acordado en Bogotá hasta el sitio de inicio de la ruta y el
                regreso.
              </h6>
            </Card.Text>
            <BtnHomeStyle onClick={() => mostrarAlerta()} variant="primary">Participar</BtnHomeStyle>
          </Card.Body>
          <CardEvent className="text-muted">
            {" "}
            Publicado hace una semana
          </CardEvent>

        </Card>
        <hr></hr>
        <Card className="text-center">
          <CardEvent>Organizado por: Parceros MTB Chía</CardEvent>
          <Card.Body >
            <Image style={{ webkitBoxShadow: "0px 0px 10px 10px #0030b7" }} src={event3} width='60%'></Image>
            <Card.Text>
              <h2 style={{ margin: "25px" }}>
                Tobia, Utica, Quebradanegra, Tobia,
              </h2>
              <h4>Fecha: 02 Mayo 2022</h4>
              <strong><h6>
                Distancia: 43,22 km,
                Desnivel positivo: 1.813 m,
                Tiempo: 4 horas,
                Dificultad: Experto"
              </h6></strong>
              <h6>
                Todo el trayecto estarás acompañado por ciclomontañistas
                experimentados quienes estarán atentos a los requerimientos de
                los participantes. <br></br>TRANSPORTE: Se prestará el servicio
                de transporte en vans con racks para los participantes y sus
                bicicletas.<br></br> La van saldrá en la mañana desde el punto
                acordado en Bogotá hasta el sitio de inicio de la ruta y el
                regreso.
              </h6>
            </Card.Text>
            <BtnHomeStyle onClick={() => mostrarAlerta()} variant="primary">Participar</BtnHomeStyle>
          </Card.Body>
          <CardEvent className="text-muted">
            {" "}
            Publicado hace una semana
          </CardEvent>
        </Card>
      </ContHomeRoad>
      <Footer />
    </div>
  );
};

export default Events;
