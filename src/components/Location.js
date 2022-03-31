import React from "react";
import '../styles/style.css'
import { Button } from 'react-bootstrap'; 
import { ContHomeRoad } from "../styles/styles";
import Naveg from "./Naveg";
import {
  Box,
  Flex,
  SkeletonText,
} from "@chakra-ui/react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import {  useState } from "react";
import Footer from "./Footer";


const center = { lat: 4.735311, lng: -74.101978 }

function Location() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
 
  if (!isLoaded) {
    return <SkeletonText />
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
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '80%', height: '80%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius='lg'
        m={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='1'
      >
      </Box>
    </Flex>
    <Button variant='warning' href='/' style={{ padding: '1rem' }} >Compartir</Button>
      </ContHomeRoad>
      <Footer/>
      
    </div>
  );
}

export default Location;