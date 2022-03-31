import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ContFirst, LogoStyle } from '../styles/styles'
import logo from '../images/cicla.png'


const LoadPage = () => {

    const navigate = useNavigate()
    
    setTimeout(() => {
        navigate('/home')
    }, 3000)   
    
  return (
    <ContFirst>
        <LogoStyle alt='first-logo' src={logo} />
       
    </ContFirst>
  )
}

export default LoadPage

