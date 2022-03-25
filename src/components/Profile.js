import React from 'react'
import { ContHomeRoad } from '../styles/styles'
import MyRoutes from './MyRoutes'
import Naveg from './Naveg'

const Profile = () => {

  

  return (
    <div>
        <Naveg/>
       
            <ContHomeRoad>
            <h2 style={{color: 'yellow'}} >Mi Perfil</h2>
            <MyRoutes/>
            </ContHomeRoad>
    </div>
  )
}

export default Profile