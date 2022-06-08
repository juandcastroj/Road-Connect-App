import React from 'react'
import { ContHomeRoad, DivAuth } from '../styles/styles'
import Naveg from './Naveg'
import Footer from './Footer'
import ButtonsHome from './ButtonsHome'

const Home = () => {
  return (
    <div>
      <Naveg />
      <DivAuth>
        <ContHomeRoad>
          <ButtonsHome/>
        </ContHomeRoad>
        <Footer />
      </DivAuth>
    </div>
  );
};

export default Home;
