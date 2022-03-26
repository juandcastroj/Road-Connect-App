import React from 'react'
import { Button } from 'react-bootstrap'
import { DivAuth, Form, Header, Input, Label, Separator } from '../../styles/styles'
import { useDispatch } from 'react-redux';
import { registroEmailPasswordNombre } from '../../actions/actionRegister';

import useForm from '../../hooks/useForm';



export const Register = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        pass1: '',
        
    });
    const { nombre, apellido, telefono, email, pass1 } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
       dispatch(registroEmailPasswordNombre(email,pass1,nombre))
    }
    return (
        <div>
            <DivAuth onSubmit={handleRegistro}>
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
                            value={nombre}
                            onChange={handleInputChange}
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
                            value={apellido}
                        onChange={handleInputChange}
                        />
                    </Label>
                    <Label htmlFor="inputEmail">
                        Teléfono
                        <Input
                            type="text"
                            name="phone"
                            id="inputPhone"
                            placeholder="Ingrese su numero de teléfono"
                            required
                            value={telefono}
                            onChange={handleInputChange}
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
                            value={email}
                            onChange={handleInputChange}
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
                            value={pass1}
                            onChange={handleInputChange}
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
                    <Button variant="warning" type="submit" >Registrarse</Button>
                </Form>
                <br></br>
                <br></br>
            </DivAuth>
        </div>
    )
}

export default Register