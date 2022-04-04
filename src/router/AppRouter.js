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
import RoutesHome from '../components/RoutesHome'
import { ContFirst, LogoStyle } from '../styles/styles'
import { PrivateRoute } from './PrivateRouter'
import { PublicRoute } from './PublicRoute'
import logo from "../images/cicla.png"
import Profile1 from '../components/profiles/Profile1'
import Profile2 from '../components/profiles/Profile2'
import Profile3 from '../components/profiles/Profile3'
import Profile4 from '../components/profiles/Profile4'
import Profile5 from '../components/profiles/Profile5'
import Profile6 from '../components/profiles/Profile6'
import Profile7 from '../components/profiles/Profile7'
import Profile from '../components/profiles/Profile'
import InitialLocation from '../components/InitialLocation'
import CreateRoute from '../components/CreateRoute'


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
            <PublicRoute isAuthenticated={isLoggedIn} >
              <Login />
            </PublicRoute>
          } />

          <Route path="/register" element={
            <PublicRoute isAuthenticated={isLoggedIn}  >
              <Register />
            </PublicRoute>
          } />

          <Route path="/addRoute" element={
            <PrivateRoute isAuthenticated={isLoggedIn}  >
              <AddRoute />
            </PrivateRoute>
            }/>

          <Route path="/myroutes" element={
            <PrivateRoute isAuthenticated={isLoggedIn}  >
              <MyRoutes />
            </PrivateRoute>}
          />
           <Route path="/profile" element={
            <PrivateRoute isAuthenticated={isLoggedIn}  >
              <Profile />
            </PrivateRoute>}
          />
          <Route path="/profile1" element={
            <PrivateRoute isAuthenticated={isLoggedIn}  >
              <Profile1 />
            </PrivateRoute>}
          />
             <Route path="/profile2" element={
            <PrivateRoute isAuthenticated={isLoggedIn}  >
              <Profile2 />
            </PrivateRoute>}
          />
               <Route path="/profile3" element={
            <PrivateRoute isAuthenticated={isLoggedIn}  >
              <Profile3 />
            </PrivateRoute>}
          />

               <Route path="/profile4" element={
            <PrivateRoute isAuthenticated={isLoggedIn}  >
              <Profile4 />
            </PrivateRoute>}
          />
               <Route path="/profile5" element={
            <PrivateRoute isAuthenticated={isLoggedIn}  >
              <Profile5/>
            </PrivateRoute>}
          />
               <Route path="/profile6" element={
            <PrivateRoute isAuthenticated={isLoggedIn}  >
              <Profile6 />
            </PrivateRoute>}
          />
               <Route path="/profile7" element={
            <PrivateRoute isAuthenticated={isLoggedIn}  >
              <Profile7 />
            </PrivateRoute>}
          />
        

          <Route path='/' element={<LoadPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/routes' element={<RoutesHome />} />
          <Route path='/routes/:id' element={<DetailRoute />} />
          <Route path='/events' element={<Events />} />
          <Route path='/location' element={<Location />} />
          <Route path='/initallocation' element={<InitialLocation />} />
          <Route path='/createroute' element={<CreateRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter