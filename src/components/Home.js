import React from 'react'
import { ContHomeRoad, DivAuth } from '../styles/styles'
import Naveg from './Naveg'
import Footer from './Footer'
import Carrusel from './Carrusel'

const Home = () => {
  return (
    <div>
      <Naveg />
      <DivAuth>
        <ContHomeRoad>
        <Carrusel/>
        </ContHomeRoad>
          <Footer />
          </DivAuth>    
     
    </div>
  )
}

export default Home
