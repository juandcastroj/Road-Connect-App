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


function Login() {
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email, password));
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };

  const handleFacebook = () => {
    dispatch(loginFacebook());
  };

  return (
    <div>
      <DivAuth >
        <Link to={"/home"}>Home</Link>
        <Header>
          <Logo src={logo} alt="Logo" />
          <h3 style={{ color: "yellow" }}>Iniciar sesión</h3>
        </Header>
       
        <DivForm>
          
          <Button variant="danger" bg="dark" onClick={handleGoogle}>
          <Icons src='https://i.ibb.co/mRP4XhZ/5847f9cbcef1014c0b5e48c8.png' alt="Logo" />
            {" "}
            
            Continuar con Google{" "}
          </Button>
          <br></br>
         
          <Button variant="dark" onClick={handleFacebook}> 
          <Icons src=' https://i.ibb.co/K9b54B9/800px-Facebook-logo-square.png' alt="Logo" />Continuar con Facebook </Button>
          <Separator />
          <Form action="" onSubmit={handleLogin}>
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
            <Button variant="warning">Iniciar Sesion</Button>
          </Form>
        </DivForm>
        <DivLink>
          <Link to="/register" style={{ color: "white" }}>
            ¿Olvidaste tu contraseña?
          </Link>
          <br></br>
          <p>
            ¿No tienes una cuenta?{" "}
            <Link to="/register" style={{ color: "yellow"}} >
              Registrate
            </Link>
          </p>
        </DivLink>
      </DivAuth>
    </div>
  );
}

export default Login;