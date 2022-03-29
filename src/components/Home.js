import React from 'react'
import { Link } from 'react-router-dom'
import { ContHome, DivAuth } from '../styles/styles'
import { Button } from 'react-bootstrap'
import Naveg from './Naveg'
import PageFooter from './PageFooter'

const Home = () => {
  return (
    <div>
       <Naveg/>
      <DivAuth>       
        <ContHome>
          <Button variant='warning' ><Link to={'/location'} style={{textDecoration:'none'}} > Ingresa tu ubicación </Link></Button>
          <hr></hr>
          <Button variant='warning' ><Link to={'/routes'} style={{textDecoration:'none'}} > Rutas Populares </Link></Button>
          <hr></hr>
          <Button variant='warning' ><Link to={'/events'} style={{textDecoration:'none'}} > Próximos eventos </Link></Button>
        </ContHome>
        <PageFooter/>
      </DivAuth>
    </div>
  )
}

export default Home
