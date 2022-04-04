import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerRouteAsync } from '../actions/actionRoutes'
import { fileUpload } from '../helpers/fileUpload'
import useForm from '../hooks/useForm'
import { DivAuth, Form, Header, Input, Label, Separator } from '../styles/styles'
import Footer from './Footer'
import Naveg from './Naveg'

const AddRoute = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [values, handleInputChange, reset] = useForm({
       nombre: '',
       distancia: '',
       desnivel: '', 
       tiempo: '',
       imagen: ''
    })
    const { nombre, distancia, desnivel, tiempo, imagen } = values

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(registerRouteAsync(values))      
        reset()
        alert("TU RUTA HA SIDO AGREGADA")

        setTimeout(() => {
          navigate('/myRoutes')
      },2000)
    }

    const handleFileChange =(e)=>{
      const file = e.target.files[0]
      fileUpload(file)
          .then(resp =>{
             values.imagen = resp
              console.log(resp)
          })
          .catch(error =>{
              console.log(error.message)
          })
  }

  return (
    <div>
        <Naveg/>
         <DivAuth>
            <Header>
                <h2 style={{color: 'yellow'}} >Agrega una nueva ruta</h2>
            </Header>
            <Separator />
                <Form onSubmit={handleSubmit} >
                    <Label>
                        Nombre
                        <Input 
                            type="text"
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                            placeholder="Nombre de la ruta"
                            required
                        />
                    </Label>
                    <Label>
                        Distancia
                        <Input
                            type="text"
                            name="distancia"
                            value={distancia}
                            onChange={handleInputChange}
                            placeholder="Km"
                            required
                        />
                    </Label>
                    <Label>
                        Desnivel Positivo
                        <Input
                            type="text"
                            name="desnivel"
                            value={desnivel}
                            onChange={handleInputChange}
                            placeholder="Elevación ganada"
                            required
                        />
                        </Label>
                        <Label>
                        Tiempo
                        <Input
                            type="text"
                            name="tiempo"
                            value={tiempo}
                            onChange={handleInputChange}
                            placeholder="tiempo promedio"
                            required
                        />
                        </Label>
                    <Label>
                        Imagen
                        <Input
                            type="file"
                            name="imagen"
                            value={imagen}
                            onChange={handleFileChange}
                            required
                        />
                    </Label>
                    <Button variant="warning" type='submit'>Guardar</Button>
                </Form>
                <br></br>
                <br></br>
            </DivAuth>
            <Footer/>
    </div>
  )
}

export default AddRoute