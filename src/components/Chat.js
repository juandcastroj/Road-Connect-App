import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { db } from '../firebase/firebaseConfig'
import { useChat } from '../hooks/useChat'
import { DivAuth } from '../styles/styles'
import Footer from './Footer'
import Naveg from './Naveg'

const Chat = () => {

    const [message, setMessage] = useState('')
    // const { loading, messages, error } = useChat()

    
    const sendMessage = (e) => {
        e.preventDefault()

        db.collection('messages').add({
            timestamp: Date.now()
        })
    }

    return (
        <div>
            <Naveg />
            <DivAuth>
                <div style={{ padding: '8rem' }}  >
                    <Form>
                        <input value={message} onChange={(e) => setMessage(e.target.value)} />
                        <Button type='submit' onClick={sendMessage} >Enviar</Button>
                    </Form>
                    <h4>Escribe un mensaje...</h4>
                    <ul>
                        {/* {messages.map(m => <li key={m.id} >{m.message}</li>)} */}
                        hola
                    </ul>
                </div>
            </DivAuth>
            <Footer />
        </div>
    )
}

export default Chat