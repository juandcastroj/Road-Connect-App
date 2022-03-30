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
                        src="https://www.cycle-nco.fr/wp-content/uploads/2019/02/cylclenco-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <ButtonsHome />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/77/17/b5/7717b5ac1e5ac6d1354f001a4410aa6a.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <ButtonsHome />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://th.bing.com/th/id/R.98c072790be306dc6592e0bdada43169?rik=GBVFHW%2b8pYF4UA&riu=http%3a%2f%2fwww.todociclismoradio.com%2fuploads%2ftodociclismo%2f11933%2festampa-ciclista-la-de-cristina.jpg&ehk=HiW2OD7hqzwulyZ79FZmMVE%2fjXsG2KSOGOIXU%2fHZ1y8%3d&risl=&pid=ImgRaw&r=0"
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