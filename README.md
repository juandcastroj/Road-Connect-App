# 🚴 Road Connect 🚴‍♀️

Social network that helps recreational cyclists to find company for a ride and create a community.

Aplicación enfatizada a la seguridad para montar bicicleta deportivamente, ayudando a los biciusuarios a conseguir compañía, ya sea con comunidad de personas que vivan cerca a su residencia o con planes establecidos con anticipación, además de la posibilidad de compartir tu ubicación en tiempo real a tus contactos.

## Despliege 🚀

* [Despliegue Firebase]()
* [Despliegue actualizado netifly](https://admirable-blancmange-3ee755.netlify.app)

##  Especificaciones técnicas 

Dentro de los recursos técnicos utilizados para el desarrollo se encuentran:
- Autentificación de usuarios por medio de Firebase Authentication con correo y contraseña, cuenta de Google y cuenta de Facebook.
- En base a la autentificación del usuario, se ejecuta un sistema de protección de rutas por medio de _React-router-dom_. Dentro de las rutas públicas se encuentran la página principal y las rutas sugeridas para montar bicicleta al rededor de Bogotá. Dentro de las rutas públicas limitadas están la sección de Login y Sign Up (solo se accede a ellas en caso de que el usuario no esté autenticado). Dentro de las rutas privadas, se encuentran el perfil propio, mis rutas favoritas, las cuales se pueden subir a la app por medio de un Crud realizado con Firebase.
- Uso de _componentes en función_ de React y de _hooks_ tales como _useState_, _useEffect_, _useParams_ y _useNavigate_ para el manejo de estados e intercambio de información entre componentes dentro de la aplicación. Así mismo para funcionalidades de búsqueda, filtrado y condiciones de carga del sitio.
- Uso de almacenamiento externo (_backend_) por medio de una base de datos en Firebase. En esta base de datos se almacena la información de los productos y se accede a ella por medio de peticiones asíncronas en caso de modificación de información o sincronización de la información con el _almacenamiento local_.
- Uso de almacenamiento local centralizado por medio de _Redux_. Se tienen dos estados dentro de la apliación: usuario y rutas propias. La información de usuario se maneja en relación con el estado de la autentificiación, la información de rutas es sincronizada con el almacenamiento de Firebase.

### Instalación 🔧

_For run this proyect you have to have installed node js in your pc, and you need to install the next dependencies:

_npm install:
 -React -bootstrap -React-Bootstrap -react-router-dom -redux -react-redux -redux-thunk -sweetAlert2 -react icons -styledComponents -firebase

_then you can run this repository with the command :  -npm start

_now you can enjoy it :)
## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [ReactJs](https://reactjs.org/) - El framework web usado
* [React-Bootstrap](https://react-bootstrap.github.io/) - Libreria de componentes
* [Redux](https://redux.js.org/) - Contenedor de estados
* [Firebase](https://firebase.google.com/) - Backend (autenticación, base de datos y despliegue)

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/academia-geek/demo-day-projects-roadconnect/wiki/Road-Connect)

## Versionado 📌

Usamos [GitHub](http://github.com/) para el manejo de versiones.

## Autores ✒️

* **Alejandra Moreno** 
* **Juan David Castro**   

También puedes mirar la lista de todos los [contribuyentes](https://github.com/academia-geek/demo-day-projects-roadconnect/graphs/contributors) quíenes han participado en este proyecto. 

🏙 Proyecto realizado para nuestro Demoday (proyecto final) como Desarolladores Frontend React JS en **Academia Geek**

## 👋 Gracias por visitar este repositorio

---
⌨️ con ❤️ por [Juan David Castro Jaramillo](https://github.com/juandjaramillo) 
