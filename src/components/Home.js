import React from "react";
import { Link } from "react-router-dom";
import { ContHome, DivAuth} from "../styles/styles";
import Naveg from "./Naveg";
import "../styles/style.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Naveg />
      <DivAuth/>
        <ContHome>

          </ContHome>
  <Footer/>
    </div>
    
  );
};

export default Home;
