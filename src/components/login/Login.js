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
  DivForm,
  Icons
} from "../../styles/styles.js";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/cicla.png";
import {
  loginFacebook,
  loginGoogle,
  loginEmailPassword,
} from "../../actions/actionLogin";
import { useDispatch } from "react-redux";
import useForm from "../../hooks/useForm.js";
import Footer from "../Footer.js";
import Naveg from "../Naveg.js";


function Login() {

  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch( loginEmailPassword( email, password ));
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };

  const handleFacebook = () => {
    dispatch(loginFacebook());
  };

  return (
    <div>
      <Naveg/>
      <DivAuth >
        <Header>
          <Logo src={logo} alt="Logo" />
          <h3 style={{ color: "yellow" }}>Iniciar sesión</h3>
        </Header>
        <DivForm>
          <Button variant="danger" bg="dark" type="button" onClick={handleGoogle}>
          <Icons src='https://i.ibb.co/mRP4XhZ/5847f9cbcef1014c0b5e48c8.png' alt="Logo" />
            {" "}
            Continuar con Google{" "}
          </Button>
          <br></br>
          <Button variant="dark" type="button" onClick={handleFacebook}> 
          <Icons src=' https://i.ibb.co/K9b54B9/800px-Facebook-logo-square.png' alt="Logo" />Continuar con Facebook </Button>
          <Separator />
          <Form onSubmit={handleLogin} >
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
            <br></br>
            <Button variant="warning" type="submit" >Iniciar Sesion</Button>
          </Form>
        </DivForm>
        <DivLink>
          <Link to="/register" style={{ color: "white" , textDecoration: 'none' }}>
            <h5>¿Olvidaste tu contraseña?</h5>
          </Link>
          <br></br>
          <h4>
            ¿No tienes una cuenta?{" "}
            <Link to="/register" style={{ color: "yellow"}} >
              Registrate
            </Link>
          </h4>
        </DivLink>
      </DivAuth>
      <Footer/>
    </div>
  );
}

export default Login;