import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { ContHomeRoad } from '../styles/styles'
import Naveg from './Naveg'

const Events = () => {
    return (
        <div>
             <Naveg/>
            <ContHomeRoad>
            <h2 style={{color: 'yellow'}} >Próximos Eventos</h2>
                <Card className="text-center">
                    <Card.Header>Evento</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="warning">participar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
                <hr></hr>
                <Card className="text-center">
                    <Card.Header>Evento</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="warning">participar</Button>
                    </Card.Body>                    
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
                <hr></hr>
                <Card className="text-center">
                    <Card.Header>Evento</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="warning">participar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </ContHomeRoad>
        </div>
    )
}

export default Events