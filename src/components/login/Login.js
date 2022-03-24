import React from "react";
import {
  DivAuth,
  Header,
  Logo,
  Form,
  Label,
  DivLink,
  Input,
  Separator,
  DivForm
} from "../../styles/styles.js";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../images/cicla.png'


const Login = () => {


  

  return (

    <div>
      <DivAuth>
        <Link to={'/home'} >Home</Link>
      <Header>
        <Logo src={logo} alt="Logo" />
        <h3 style={{color: 'yellow'}} >Iniciar sesión</h3>
      </Header>
      <DivForm>         
        <Button variant="danger" bg="dark" > Continuar con Google </Button>
         <br></br>
         <Button variant="dark" > Continuar con Facebook </Button>
        <Separator />
        <Form action="" >
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
          <br></br>
          <Button variant="warning" >Iniciar Sesion</Button>
        </Form>
      </DivForm>
      <DivLink>
        <Link to="/register" style={{ color: "white"}}>
          ¿Olvidaste tu contraseña?
        </Link>
        <br></br>
        <p>
          ¿No tienes una cuenta?{" "}
          <Link to="/register" style={{ color: "yellow" }}>
            Registrate
          </Link>
        </p>
      </DivLink>      
    </DivAuth>
    </div>
  )
}

export default Login