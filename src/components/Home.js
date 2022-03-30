import React from "react";
import { Link } from "react-router-dom";
import { ContHome, DivAuth, Footer } from "../styles/styles";
import { Button } from "react-bootstrap";
import Naveg from "./Naveg";
import PageFooter from "./PageFooter";
import "../styles/style.css";

const Home = () => {
  return (
    <div>
      <Naveg />
      <DivAuth/>
        <ContHome>
         
          <main>
            <button>
              <Link to={"/location"} style={{ textDecoration: "none" }}>
                {" "}
                Ingresa tu ubicación{" "}
              </Link>
            </button>
            <hr></hr>

            <div class="rutas-recomendadas contenedor">
              <div class="contenedor-titulo-controles">
                <button>
                  <Link to={"/routes"} style={{ textDecoration: "none" }}>
                    {" "}
                    Rutas Recomendadas{" "}
                  </Link>
                </button>

                <div class="indicadores"></div>
              </div>
              <div class="contenedor-principal">
                <button
                  role="button"
                  id="flecha-izquierda"
                  class="flecha-izquierda"
                >
                  <i class="fas fa-angle-left"></i>
                </button>

                <div class="contenedor-carousel">
                  <div class="carousel">
                    <div class="ruta">
                      <a href="#">
                        <img src="https://i.ibb.co/Gpbfykx/cicla.png" alt="" />
                      </a>
                    </div>
                    <div class="ruta">
                      <a href="#">
                        <img src="https://i.ibb.co/Gpbfykx/cicla.png" alt="" />
                      </a>
                    </div>
                    <div class="ruta">
                      <a href="#">
                        <img src="https://i.ibb.co/Gpbfykx/cicla.png" alt="" />
                      </a>
                    </div>
                    <div class="ruta">
                      <a href="#">
                        <img src="https://i.ibb.co/Gpbfykx/cicla.png" alt="" />
                      </a>
                    </div>
                    <div class="ruta">
                      <a href="#">
                        <img src="https://i.ibb.co/Gpbfykx/cicla.png" alt="" />
                      </a>
                    </div>
                    <div class="ruta">
                      <a href="#">
                        <img src="https://i.ibb.co/Gpbfykx/cicla.png" alt="" />
                      </a>
                    </div>
                    <div class="ruta">
                      <a href="#">
                        <img src="" alt="" />
                      </a>
                    </div>
                    <div class="ruta">
                      <a href="#">
                        <img src="" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  role="button"
                  id="flecha-derecha"
                  class="flecha-derecha"
                >
                  <i class="fas fa-angle-right"></i>
                </button>
              </div>
            </div>

            <button>
              <Link to={"/events"} style={{ textDecoration: "none" }}>
                {" "}
                Proximos Eventos{" "}
              </Link>
            </button>

            <div class="pelicula-principal">
              <div class="contenedor">
                <h3 class="titulo"> Carrera ruta Senior</h3>
                <p class="descripcion">Descripcion de Ruta</p>
                <button Link to={"/routes"} role="button" class="boton">
                  <i class="fas fa-info-circle"></i>Más información
                </button>
              </div>
            </div>
          </main>
          </ContHome>
   <Footer/>
    </div>
  );
};

export default Home;
