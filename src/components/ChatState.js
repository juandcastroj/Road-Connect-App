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
          <div  style={{backgroundColor:'gray' ,color:'white' ,padding:'1.5rem' ,borderRadius:'25px'}} ><h3  > Tú: <strong>{message}</strong></h3>
          <br></br><p>ahora</p></div>
          <br></br>          
            <FormControl style={{padding:'2rem', borderRadius:'25px' }}  placeholder='Escribe un mensaje...' />
            <br></br>
            <BtnHomeStyle variant='warning' onClick={showMessage} >Enviar mensaje</BtnHomeStyle>
        </ContHomeRoad>
        <Footer/>
    </div>
  )
}

export default ChatState