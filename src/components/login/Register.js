import React from 'react'
import { Button } from 'react-bootstrap'
import { DivAuth, Form, Header, Input, Label, Separator } from '../../styles/styles'

const Register = () => {
    return (
        <div>
            <DivAuth>
            <Header>
                <h2 style={{color: 'yellow'}} >Registra tu usuario</h2>
            </Header>
            <Separator />
                <Form>
                    <Label htmlFor="inputEmail">
                        Nombre
                        <Input
                            type="text"
                            name="name"
                            id="inputName"
                            placeholder="Ingrese su nombre"
                            required
                        />
                    </Label>
                    <Label htmlFor="inputEmail">
                        Apellido
                        <Input
                            type="text"
                            name="name"
                            id="inputName"
                            placeholder="Ingrese su nombre apellido"
                            required
                        />
                    </Label>
                    <Label htmlFor="inputEmail">
                        Teléfono
                        <Input
                            type="number"
                            name="phone"
                            id="inputPhone"
                            placeholder="Ingrese su numero de teléfono"
                            required
                        />
                        </Label>
                    <Label htmlFor="inputEmail">
                        Correo electrónico
                        <Input
                            type="email"
                            name="email"
                            id="inputEmail"
                            placeholder="Ingrese su correo electrónico"
                            required
                        />
                    </Label>
                    <Label htmlFor="inputPassword">
                        Contraseña
                        <Input
                            type="password"
                            name="password"
                            id="inputPassword"
                            placeholder="Ingrese su contraseña"
                            required
                        />
                    </Label>
                    <Label htmlFor="inputPassword">
                        Foto
                        <Input
                            type="file"
                            name="image"
                            id="image"
                            placeholder="Agrega tu foto"
                            required
                        />
                    </Label>
                    <Button variant="warning" >Registrarse</Button>
                </Form>
                <br></br>
                <br></br>
            </DivAuth>
        </div>
    )
}

export default Register