import React, { useState } from 'react'
import { FormControl } from 'react-bootstrap'
import { BtnHomeStyle, ContHomeRoad } from '../styles/styles'
import Footer from './Footer'
import Naveg from './Naveg'

const ChatState = () => {


    const [message, setMessage] = useState([])


    const showMessage = () => {
        setMessage("Hola Monica, ¿como estás?, me gustaría salir a rodar contigo...")
    }


  return (
    <div>
        <Naveg/>
        <ContHomeRoad style={{padding: '30rem  20rem 5rem'}} >
          <div><h3 style={{color: 'white'}} > Tú: <strong>{message}</strong></h3></div>
          <br></br>
          <h6>ahora</h6>
            <FormControl style={{padding:'2rem' }}  placeholder='Escribe un mensaje...' />
            <br></br>
            <BtnHomeStyle variant='warning' onClick={showMessage} >Enviar mensaje</BtnHomeStyle>
        </ContHomeRoad>
        <Footer/>
    </div>
  )
}

export default ChatState