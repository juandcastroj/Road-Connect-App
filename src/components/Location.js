import React from "react";
import '../styles/style.css'
import { Button } from 'react-bootstrap';
import { ContFirst, ContHomeRoad, LogoStyle } from "../styles/styles";
import Naveg from "./Naveg";
import { Box, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import logo from "../images/cicla.png";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

const location1 = { lat: 4.7001320, lng: -74.1281660 }
const location2 = { lat: 4.735311, lng: -74.101978 }
const location3 = { lat: 4.703187, lng: -74.101184 }
const location4 = { lat: 4.713928, lng: -74.115346 }
const location5 = { lat: 4.732515, lng: -74.106597 }


function Location() {

  const navigate = useNavigate()

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  const [setMap] = useState(/** @type google.maps.Map */(null))
  const [directionsResponse] = useState(null)

  if (!isLoaded) {
    return (
      <ContFirst>
        <LogoStyle alt='first-logo' src={logo} />
      </ContFirst>
    )
  }

  const contact = () => {
    navigate('/profile')
  }
  

  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        <Flex
          position='relative'
          flexDirection='column'
          alignItems='center'
          h='100vh'
          w='100vw'
        >
          <Box position='absolute' left={0} top={0} h='100%' w='100%'>
            {/* Google Map Box */}
            <GoogleMap
              center={location4}
              zoom={14}
              mapContainerStyle={{ width: '80%', height: '80%' }}
              options={{
                // zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={map => setMap(map)}
            >
              <Marker onClick={contact} position={location1} />
              <Marker onClick={contact} position={location2} />
              <Marker onClick={contact} position={location3} />
              <Marker onClick={contact} position={location4} />
              <Marker onClick={contact} position={location5} />

              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          </Box>
        </Flex>
        <Button variant='warning' href='/' style={{ padding: '0.8rem' }} >Compartir mi Ubicación</Button>
      </ContHomeRoad>
      <Footer />
    </div>
  );
}

export default Location;