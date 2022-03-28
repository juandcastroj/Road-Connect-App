import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import { ContHomeRoad } from '../styles/styles'
import Naveg from './Naveg'
import event1 from '../images/evento1.jpg'
import event2 from '../images/event02.jpg'
import event3 from '../images/evento3.jpg'

const Events = () => {
    return (
        <div>
             <Naveg/>
            <ContHomeRoad>
            <h2 style={{color: 'yellow'}} >Próximos Eventos</h2>
                <Card className="text-center">
                    <Card.Header>Organizado por: IDRD</Card.Header>
                    <Card.Body>
                        <Card.Title>Evento Infantil 
                        </Card.Title>
                        <Image src={event1} width={600}></Image>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="warning">Participar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted"> publicado hace 5 dias</Card.Footer>
                </Card>
                <hr></hr>
                <Card className="text-center">
                    <Card.Header>Organizado por: Escarabajos Bogotá</Card.Header>
                    <Card.Body>
                        <Card.Title>Carrera ruta Senior</Card.Title>
                        <Image src={event2} width={600}></Image>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="warning">Participar</Button>
                    </Card.Body>                    
                    <Card.Footer className="text-muted"> publicado hace una semana</Card.Footer>
                </Card>
                <hr></hr>
                <Card className="text-center">
                    <Card.Header>Organizado por: Parceros MTB Chía</Card.Header>
                    <Card.Body>
                        <Card.Title>Evento rodada MTB</Card.Title>
                        <Image src={event3} width={600}></Image>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="warning">participar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Publicado hace un mes</Card.Footer>
                </Card>
                </ContHomeRoad>
        </div>
    )
}

export default Events