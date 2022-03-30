import React from "react";
import { Link } from "react-router-dom";
import { Footer, FooterSocial, IconSocial, Contact } from "../styles/styles";

const PageFooter = () => {
  return (
    <Footer>
      <img src="https://i.ibb.co/Gpbfykx/cicla.png" alt="" width="130px" />
      <div></div>
      <div>
        <div>
          <img src="{phoneIcon}" alt="" />
          <strong>
            <p>Desarrolladores</p>
          </strong>
        </div>
        <div>
          <center>
            <p>Alejandra Moreno</p>
          </center>
          <div></div>
          <IconSocial
            src="https://i.ibb.co/T2cPS20/icons8-github-30-1.png"
            alt=""
            width="30px"
          />
          <IconSocial
            src="https://i.ibb.co/vh710HQ/icons8-linkedin-30.png"
            alt=""
            width="30px"
          />
          <IconSocial
            src="https://i.ibb.co/s6sCWM4/icons8-slack-nuevo-32.png"
            alt=""
            width="30px"
          />
          <IconSocial
            src="https://i.ibb.co/cQt0JNR/icons8-facebook-30.png"
            alt=""
            width="30px"
          />
          <IconSocial
            src="https://i.ibb.co/021QyHd/icons8-instagram-30.png"
            alt=""
            width="30px"
          />
          <IconSocial
            src="https://i.ibb.co/Q6PNL0j/icons8-twitter-30.png"
            alt=""
            width="30px"
          />
        </div>
        <div>
          <center>
            <p>Juan David Castro</p>
          </center>
          <div></div>
          <IconSocial
            src="https://i.ibb.co/T2cPS20/icons8-github-30-1.png"
            alt=""
            width="30px"
          />
          <IconSocial
            src="https://i.ibb.co/vh710HQ/icons8-linkedin-30.png"
            alt=""
            width="30px"
          />
          <IconSocial
            src="https://i.ibb.co/s6sCWM4/icons8-slack-nuevo-32.png"
            alt=""
            width="30px"
          />
          <IconSocial
            src="https://i.ibb.co/cQt0JNR/icons8-facebook-30.png"
            alt=""
            width="30px"
          />
          <IconSocial
            src="https://i.ibb.co/021QyHd/icons8-instagram-30.png"
            alt=""
            width="30px"
          />
          <IconSocial
            src="https://i.ibb.co/Q6PNL0j/icons8-twitter-30.png"
            alt=""
            width="30px"
          />
        </div>
      </div>
      <div>
        <a href="#root">Contact us</a>
        <Contact>bike@roadconnect.com</Contact>
      </div>
      <div>
        <a href="#root">About us</a>
        <Contact>
          Road Connect
          <br></br> Red para Deportistas
        </Contact>
      </div>
    </Footer>
  );
};

export default PageFooter;
