import React, { useState } from 'react'
import { FormControl } from 'react-bootstrap'
import { BtnHomeStyle, ContHomeRoad } from '../styles/styles'
import Footer from './Footer'
import Naveg from './Naveg'

const ChatState = () => {

  const [message, setMessage] = useState([])
  const [mostrar, setMostrar] = useState(false)
 
  const handleInputChange = ( {target} ) => {
    setMessage(target.value)    
  }

  const handleSubmit = (e) => {
    setMostrar(true)
    setMessage(message)
  }

  return (
    <div>
        <Naveg/>
        <ContHomeRoad style={{padding: '20% 20% 5%'}} >          
            { mostrar ?
            <div style={{ backgroundColor:'#B0C4DE' ,color:'darkBlue' ,padding:'1.5rem' ,borderRadius:'25px'}}  >
           <div ><h4>Tu:</h4><h2 >{message}</h2></div><br></br><p>Ahora</p> 
           </div>
            : "" 
            }
          <br></br>          
            <FormControl style={{padding:'2rem', borderRadius:'25px' }}  placeholder='Escribe un mensaje...' onChange={handleInputChange} name='message' value={message} />
            <br></br>
            <BtnHomeStyle variant='warning' onClick={handleSubmit}  >Enviar mensaje</BtnHomeStyle>
        </ContHomeRoad>
        <Footer/>
    </div>
  )
}

export default ChatState