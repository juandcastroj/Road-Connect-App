// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { logout } from '../actions/actionLogin'

// const Identification = () => {

//   const {user} = useSelector((store)=>store.login)

//   console.log(user);
//  const dispatch = useDispatch()
  
//   const nombre = user.length===0
//     ? "identificate"
//     : user.displayname

//   return (
//     <div className='hdr-identificacion'>
//       <h5 style={{color: 'white'}} >Hola, {nombre}</h5>
//         {user.length===0 &&
//             <Link to='/login'>Iniciar sesión</Link>
//         }
//         {user.length!==0 &&
//             <p style={{color: 'white'}} onClick={()=>dispatch(logout())} >
//               Cerrar sesión
//             </p>
//         }
//     </div>
//  )
// }

// export default Identification