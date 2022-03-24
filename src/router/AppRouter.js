import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Events from '../components/Events'
import Home from '../components/Home'
import LoadPage from '../components/LoadPage'
import Login from '../components/login/Login'
import Register from '../components/login/Register'
import RoadsHome from '../components/RoadsHome'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route  path='/'  element={<LoadPage/>} />
                <Route  path='/login'  element={<Login/>} />
                <Route  path='/register'  element={<Register/>} />
                <Route  path='/home'  element={<Home/>} />
                <Route  path='/roads'  element={<RoadsHome/>} />
                <Route  path='/events'  element={<Events/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter