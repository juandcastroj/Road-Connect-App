import React from 'react'
import { Carousel } from 'react-bootstrap'
import ButtonsHome from './ButtonsHome'

const Carrusel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="https://i.ibb.co/j4KKSdF/en-bici-por-death-valley.jpgg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <ButtonsHome />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/KGj9Pdr/thumb-1920-666213.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <ButtonsHome />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/6B2f216/3478081600116200099.jpg"
                        alt="Third slide" width="80%"
                    />

                    <Carousel.Caption>
                        <ButtonsHome />
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carrusel