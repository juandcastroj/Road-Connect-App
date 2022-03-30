import React from 'react'
import { ContHomeRoad } from '../styles/styles'
import Naveg from './Naveg'
import Footer from './Footer'
import profile from '../images/team2.jpg'
import { Button } from 'react-bootstrap'

const Profile = () => {

    return (

        <div>
            <Naveg />
            <ContHomeRoad>
                <div>
                    <div className="card" style={{margin:'3% 25% '}} >
                        <img src={profile} alt="John" style={{width:'100%'}} />
                            <h1>John Martinez</h1>
                            <p className="title">Ciclismo MTB y ruta</p>
                            <p>Bogotá, Colombia</p>
                            <div style={{margin: '24px 0'}}>
                                <a href="/home"><i className="fa fa-dribbble"></i></a>
                                <a href="/home"><i className="fa fa-twitter"></i></a>
                                <a href="/home"><i className="fa fa-linkedin"></i></a>
                                <a href="/home"><i className="fa fa-facebook"></i></a>
                            </div>
                            <Button variant='warning' > Contactar </Button>
                    </div>
                </div>
            </ContHomeRoad>
            <Footer />
        </div>
    )
}

export default Profile