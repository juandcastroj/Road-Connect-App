import React from 'react'

import { Button, Card } from 'react-bootstrap'
import { ContHomeRoad } from '../../styles/styles'
import Footer from '../Footer'
import Naveg from '../Naveg'
import profile from '../../images/team2.jpg'

const Profile = () => {

    return (

        <div>
            <Naveg />
            <ContHomeRoad>
                <Card className="text-center" width='40%' >
                    <Card.Header>Mi Perfil</Card.Header>
                    <Card.Body>
                    <img src={profile} width='40%' alt='epa' ></img>
                        <Card.Title>JHON GONZALES</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="warning">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">MTB y Ruta</Card.Footer>
                </Card>
            </ContHomeRoad>
            <Footer />
        </div>
    )
}

export default Profile