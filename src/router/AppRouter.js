import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { loginEmailPassword } from '../actions/actionLogin'
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
import { ContFirst, LogoStyle } from '../styles/styles'
import { PrivateRoute } from './PrivateRouter'
import { PublicRoute } from './PublicRoute'
import logo from "../images/cicla.png"

const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        // console.log(user)
        dispatch(loginEmailPassword(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn])

  if (checking) {
    return (
      <ContFirst>
        <LogoStyle alt='first-logo' src={logo} />
      </ContFirst>
    )
  }


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={
            <PublicRoute isAuthenticated={isLoggedIn} redirect="/home">
              <Login />
            </PublicRoute>
          } />

          <Route path="/register" element={
            <PublicRoute isAuthenticated={isLoggedIn} redirect="/home" >
              <Register />
            </PublicRoute>
          } />

          <Route path="/addRoute" element={
            <PrivateRoute isAuthenticated={isLoggedIn} redirect="/login"  >
              <AddRoute />
            </PrivateRoute>
            }/>

          <Route path="/myroutes" element={
            <PrivateRoute isAuthenticated={isLoggedIn} redirect="/login"  >
              <MyRoutes />
            </PrivateRoute>}
          />

          <Route path="/profile" element={
            <PrivateRoute isAuthenticated={isLoggedIn} redirect="/login"  >
              <Profile />
            </PrivateRoute>}
          />

          <Route path='/' element={<LoadPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/routes' element={<RoutesHome />} />
          <Route path='/routes/:id' element={<DetailRoute />} />
          <Route path='/events' element={<Events />} />
          <Route path='/location' element={<Location />} />
          <Route path='/*' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter