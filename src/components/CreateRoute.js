
import React from "react";
import '../styles/style.css'
import { BtnHomeStyle, ContHomeRoad } from "../styles/styles";
import Naveg from "./Naveg";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState } from "react";
import Footer from "./Footer";


const center = { lat: 4.735311, lng: -74.101978 }

function CreateRoute() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')

 
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = { lat: 4.7103871, lng: -74.127597 }
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <SkeletonText />
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
   
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    
     originRef.current.value = ''
    destiantionRef.current.value = ''
  }

  return (
    <div>
      <Naveg />
      <ContHomeRoad>
      <BtnHomeStyle
          variant="warning"
          href="/Location"
          style={{ padding: "0.8rem"}}
        >
          Encontrar ciclistas cercanos
        </BtnHomeStyle>
        <br></br>
        <br></br>
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
          mapContainerStyle={{ width: '80%', height: '75%' }}
          options={{
            //zoomControl: false,
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
        <HStack spacing={2} justifyContent='space-between'>
          <Box flexGrow={1} >
            <Autocomplete>
              <Input className='origin' type='text' placeholder='Origin' ref={originRef} value='a 106-42
Cl. 131b #106-14' />
            </Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
              className='origin'
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
              />
            </Autocomplete>
          </Box>

          <ButtonGroup>
            <Button colorScheme='pink' type='submit' className='calculate' onClick={calculateRoute}>
              Calcular Ruta
            </Button>
            <IconButton className='icon'
              aria-label='center back'
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text className='duration'>Distancia: {distance} </Text>
          <IconButton className='icon'
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center)
              map.setZoom(15)
            }}
          />
        </HStack>
      </Box>
    </Flex>
      </ContHomeRoad>
      <Footer/>
    </div>
  );
}

export default CreateRoute;

