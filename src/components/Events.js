import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { CardEvent, ContHomeRoad } from "../styles/styles";
import Naveg from "./Naveg";
import event1 from "../images/evento1.jpg";
import event2 from "../images/event02.jpg";
import event3 from "../images/evento3.jpg";
import Footer from "./Footer";
import swal from "sweetalert";

const Events = () => {

    
  const mostrarAlerta = () => {
    swal(" Felicidades prontó el Organizador se pondra en contacto contigo!!!");
  };
  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        <h2 style={{ color: "yellow" }}>Próximos Eventos</h2>
        <Card className="text-center">
          <CardEvent>Organizado por: IDRD</CardEvent>
          <Card.Body>
            <Card.Title
              style={{ margin: "20px", padding: "1rem", fontWeight: "900" }}
            >
              EVENTO INFANTIL
            </Card.Title>
            <Image
              style={{ webkitBoxShadow: "0px 0px 10px 10px #0030b7" }}
              src={event1}
              width={600}
            ></Image>
            <Card.Text>
            <h2 style={{ margin: "25px" }}>
              Villapinzón  Nacimiento del Río Bogotá
              </h2>
              <p>Fecha de Salida 02 Mayo 2022</p>
              <strong><p>
              Distancia: 18,88 km,
      Desnivel positivo: 828 m,
      Tiempo: 4 horas,
      Dificultad: Avanzado
      </p></strong>
              <p>
                Todo el trayecto estarás acompañado por ciclomontañistas
                experimentados quienes estarán atentos a los requerimientos de
                los participantes. <br></br>TRANSPORTE: Se prestará el servicio
                de transporte en vans con racks para los participantes y sus
                bicicletas.<br></br> La van saldrá en la mañana desde el punto
                acordado en Bogotá hasta el sitio de inicio de la ruta y el
                regreso.
              </p>

              <img
                style={{ margin: "3px" }}
                src="https://i.ibb.co/gvdYYHX/596ce466ed07ad6118f998f6.png"
                width="15%"
                alt="epa"
              ></img>
              <br></br>
            </Card.Text>
           
            <Button onClick={() => mostrarAlerta()} variant="primary">Participar</Button>
          </Card.Body>
          <CardEvent className="text-muted">
            {" "}
            Publicado hace una semana
          </CardEvent>


        </Card>
        <hr></hr>
        <Card className="text-center">
          <CardEvent>Organizado por: Escarabajos Bogotá</CardEvent>
          <Card.Body>
            <Card.Title
              style={{ margin: "20px", padding: "1rem", fontWeight: "900" }}
            >
              CARRERA RUTA JUNIOR
            </Card.Title>
            <Image
              style={{ webkitBoxShadow: "0px 0px 10px 10px #0030b7" }}
              src={event2}
              width={600}
            ></Image>
            <Card.Text>
              <h4 style={{ margin: "25px" }}>
                Bogotá a Chipaque por PNN SUMAPAZ,<br></br> Une, Cáqueza, Fosca,
                Gutierrez, Guayabetal
              </h4>
              <p>Fecha de Salida 22 Abril 2022</p>
              <strong><p>
              Distancia:190,62 km,
      Desnivel positivo: 5.856 m,
      Tiempo: 8 horas,
      Dificultad: Experto
      </p></strong>
              <p>
                Todo el trayecto estarás acompañado por ciclomontañistas
                experimentados quienes estarán atentos a los requerimientos de
                los participantes. <br></br>TRANSPORTE: Se prestará el servicio
                de transporte en vans con racks para los participantes y sus
                bicicletas.<br></br> La van saldrá en la mañana desde el punto
                acordado en Bogotá hasta el sitio de inicio de la ruta y el
                regreso.
              </p>
              <img
                style={{ margin: "3px" }}
                src="https://i.ibb.co/qJzdqdc/8986c529796ac473927cabecb9145005-pictograma-de-deporte-paralimpico-ciclismo.png"
                width="20%"
                alt="epa"
              ></img>
              <br></br>
            </Card.Text>
            <Button onClick={() => mostrarAlerta()} variant="primary">Participar</Button>
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
          <Card.Title
              style={{ margin: "20px", padding: "1rem", fontWeight: "900" }}
            >
            EVENTO RODADA MTB</Card.Title>
            <Image style={{ webkitBoxShadow: "0px 0px 10px 10px #0030b7" }} src={event3} width={600}></Image>
            <Card.Text>
              <h2 style={{ margin: "25px" }}>
              Tobia, Utica, Quebradanegra, Tobia,
              </h2>
              <p>Fecha de Salida 02 Mayo 2022</p>
              <strong><p>
              Distancia: 43,22 km,
      Desnivel positivo: 1.813 m,
      Tiempo: 4 horas,
      Dificultad: Experto"
      </p></strong>
              <p>
                Todo el trayecto estarás acompañado por ciclomontañistas
                experimentados quienes estarán atentos a los requerimientos de
                los participantes. <br></br>TRANSPORTE: Se prestará el servicio
                de transporte en vans con racks para los participantes y sus
                bicicletas.<br></br> La van saldrá en la mañana desde el punto
                acordado en Bogotá hasta el sitio de inicio de la ruta y el
                regreso.
              </p>
               <br></br>
               <img
                style={{ margin: "3px" }}
                src="https://i.ibb.co/xHRw9MN/pngbyte-com-Vector-silueta-de-ciclista-de-monta-a-silueta-de-bicicleta-de-monta-a-Png-Pic-ciclista-B.png"
                width="25%"
                alt="epa"
              ></img>
              <br></br>
            </Card.Text>
            <Button onClick={() => mostrarAlerta()} variant="primary">Participar</Button>
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
