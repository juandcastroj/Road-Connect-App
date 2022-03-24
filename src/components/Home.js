import React from 'react'
import { Link } from 'react-router-dom'
import { ContHome, DivAuth } from '../styles/styles'
import { Button } from 'react-bootstrap'
import Naveg from './Naveg'

const Home = () => {
  return (
    <div>
       <Naveg/>
      <DivAuth>       
        <ContHome>
          <Button variant='warning' ><Link to={'/location'} > Ingresa tu ubicación </Link></Button>
          <hr></hr>
          <Button variant='warning' ><Link to={'/roads'} > Rutas Populares </Link></Button>
          <hr></hr>
          <Button variant='warning' ><Link to={'/events'} > Próximos eventos </Link></Button>
        </ContHome>
      </DivAuth>
    </div>
  )
}

export default Home
