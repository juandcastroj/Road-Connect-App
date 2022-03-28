import React from 'react'
import { Button } from 'react-bootstrap'
import { DivAuth, Form, Header, Input, Label, Separator } from '../../styles/styles'
import { useDispatch } from 'react-redux';
import { registroEmailPasswordNombre } from '../../actions/actionRegister';
import useForm from '../../hooks/useForm';
import { fileUpload } from '../../helpers/fileUpload';


export const Register = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        password: '',
        imagen:'',
        
    });
    const { nombre, apellido, telefono, email, password, imagen} = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
       dispatch(registroEmailPasswordNombre(email,password,nombre))
    }

    const handleFileChange =(e)=>{
        const file = e.target.files[0]
        fileUpload(file)
            .then(resp =>{
               formValues.imagen = resp
                console.log(resp)
            })
            .catch(error =>{
                console.log(error.message)
            })
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
                            name="nombre"
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
                            name="apellido"
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
                            name="telefono"
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
                            value={password}
                            onChange={handleInputChange}
                        />
                    </Label>
                    <Label htmlFor="inputPassword">
                        Foto
                        <Input
                            type="file"
                            name="imagen"
                            id="image"
                            placeholder="Agrega tu foto"
                            required
                            value={imagen}
                            onChange={handleFileChange}/>
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