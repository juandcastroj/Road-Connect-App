import React from 'react'
import { Link } from 'react-router-dom'
import { BtnHomeStyle } from '../styles/styles'

const BtnHomeStylesHome = () => {
  return (
    <div>
        <BtnHomeStyle variant='warning' ><Link to={'/location'} style={{ textDecoration: 'none' }} > Ingresa tu ubicación </Link></BtnHomeStyle>
          <hr></hr>
          <BtnHomeStyle variant='warning' ><Link to={'/routes'} style={{ textDecoration: 'none' }} > Rutas Sugeridas </Link></BtnHomeStyle>
          <hr></hr>
          <BtnHomeStyle variant='warning' ><Link to={'/events'} style={{ textDecoration: 'none' }} > Próximos eventos </Link></BtnHomeStyle>
    </div>
  )
}

export default BtnHomeStylesHome