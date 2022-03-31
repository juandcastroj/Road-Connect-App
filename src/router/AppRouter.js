import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddRoute from '../components/AddRoute'
import DetailRoute from '../components/DetailRoute'
import Events from '../components/Events'
import Home from '../components/Home'
import LoadPage from '../components/LoadPage'
import Location from '../components/Location'
import Login from '../components/login/Login'
import Register from '../components/login/Register'
import MyRoutes from '../components/MyRoutes'
import Profile from '../components/Profile'
import RoutesHome from '../components/RoutesHome'
import LocationRoute from '../components/LocationRoute'
const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route  path='/'  element={<LoadPage/>} />
                <Route  path='/login'  element={<Login/>} />
                <Route  path='/register'  element={<Register/>} />
                <Route  path='/home'  element={<Home/>} />
                <Route  path='/routes'  element={<RoutesHome/>} />
                <Route  path='/routes/:id'  element={<DetailRoute/>} />
                <Route  path='/myroutes'  element={<MyRoutes/>} />
                <Route  path='/events'  element={<Events/>} />
                <Route  path='/location'  element={<Location/>} />
                <Route  path='/profile'  element={<Profile/>} />
                <Route  path='/addRoute'  element={<AddRoute/>} />  
                <Route  path='/locationRoute'  element={<LocationRoute/>} />  

               

            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter