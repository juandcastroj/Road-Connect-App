import React from 'react'
import { Button } from 'react-bootstrap'
import { DivAuth, Form, Header, Input, Label, Separator } from '../../styles/styles'
import { useDispatch } from 'react-redux';
import { registroEmailPasswordNombre } from '../../actions/actionLogin';
import useForm from '../../hooks/useForm';
import { fileUpload } from '../../helpers/fileUpload';
import Footer from '../Footer';
import Naveg from '../Naveg';


export const Register = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        image:'',
        
    });
    const { email, password, name, image } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
       dispatch(registroEmailPasswordNombre(  email, password, name, image ))
    }

    // const handleFileChange =(e)=>{
    //     const file = e.target.files[0]
    //     fileUpload(file)
    //         .then(resp =>{
    //            formValues.image = resp
    //             console.log(resp)
    //         })
    //         .catch(error =>{
    //             console.log(error.message)
    //         })
    // }

    return (
        <div>
            <Naveg/>
            <DivAuth onSubmit={handleRegistro}>
            <Header>
                <h2 style={{color: 'yellow'}} >Registra tu usuario</h2>
            </Header>
            <Separator />
                <Form>
                    <Label htmlFor="inputName">
                        Nombre Completo
                        <Input
                            type="text"
                            name="name"
                            id="inputName"
                            placeholder="Ingrese su nombre"
                            required
                            value={name}
                            onChange={handleInputChange}
                        />
                    </Label>
                    <Label htmlFor="inputEmail">
                        Correo electrónico
                        <Input
                            type="email"
                            name="email"
                            id="inputEmail"
                            placeholder="Ingrese su email"
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
                    <Label>
                        Foto
                        <Input 
                            type="text"
                            name="image"
                            value={image}
                            placeholder="Ingrese url de su foto"
                            required
                            onChange={handleInputChange}/>
                    </Label>
                    <Button variant="warning" type="submit" >Registrarse</Button>
                </Form>
                <br></br>
                <br></br>
            </DivAuth>
            <Footer/>
        </div>
    )
}

export default Register