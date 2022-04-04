import React from 'react'
import { Link } from 'react-router-dom'
import { BtnHomeStyle } from '../styles/styles'

const BtnHomeStylesHome = () => {
  return (
    <div>
        <BtnHomeStyle variant='warning' ><Link to={'/initallocation'} style={{ textDecoration: 'none' }} > INGRESA TU UBICACIÓN </Link></BtnHomeStyle>
          <hr></hr>
          <BtnHomeStyle variant='warning' ><Link to={'/routes'} style={{ textDecoration: 'none' }} > RUTAS SUGERIDAS </Link></BtnHomeStyle>
          <hr></hr>
          <BtnHomeStyle variant='warning' ><Link to={'/events'} style={{ textDecoration: 'none' }} > PRÓXIMOS EVENTOS </Link></BtnHomeStyle>
    </div>
  )
}

export default BtnHomeStylesHome