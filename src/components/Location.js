import React from "react";
import { ContHomeRoad } from "../styles/styles";
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


const center = { lat: 4.735311, lng: -74.101978 };


function Location() {
 
  
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setmap] = useState(/**@type google.maps.GoogleMap*/ (null));
  const [directionResponse, setDirectionsRenponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const originRef = useRef();

  const destinationRef = useRef();
  const [posicion, setPosicion] = useState({
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 0,
  });

  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute() {
    if (originRef.currentvalue === "" || destinationRef.current.values === "") {
      return;
    }
    //eslint-disable-next-line no-undef
    const directionService = new google.map.DirectionService();
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      //eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsRenponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }
  function clearRoute() {
    setDirectionsRenponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  navigator.geolocation.getCurrentPosition(
    function (position) {
      setPosicion({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        zoom: 15,
      });
    },
    function (error) {
      console.error("Error Code = " + error.code + " - " + error.message);
    },
    {
      enableHighAccuracy: true,
    }
  );
  return (
    <div>
      <Naveg />
      <ContHomeRoad>
        <Flex
          position="relative"
          flexDirection="column"
          alignItems="center"
          h="100vh"
          w="100vw"
        >
          <Box position="absolute" left={0} top={0} h="80%" w="80%">
            {/* Google Map Box */}
            <GoogleMap
              center={center}
              zoom={15}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={(map) => setmap(map)}
            >
              <Marker position={center} />
              {directionResponse && (
                <DirectionsRenderer directions={directionResponse} />
              )}
            </GoogleMap>
          </Box>
          <Box
            p={4}
            borderRadius="lg"
            m={4}
            bgColor="white"
            shadow="base"
            minW="container.md"
            zIndex="modal"
          >
            <HStack spacing={4}>
              <Autocomplete>
                <Input type="text" placeholder="Origin" ref={originRef} />
              </Autocomplete>
              <Autocomplete>
                <Input
                  type="text"
                  placeholder="Destination"
                  ref={destinationRef}
                />
              </Autocomplete>
              <ButtonGroup>
                <Button
                  colorScheme="pink"
                  type="submit"
                  onClick={calculateRoute}
                >
                  Calcular Ruta
                </Button>
                <IconButton
                  aria-label="center back"
                  icon={<FaTimes />}
                  npm
                  start
                  onClick={clearRoute}
                />
              </ButtonGroup>
            </HStack>
            <HStack spacing={4} mt={4} justifyContent="space-between">
              <Text>Distance:{distance} </Text>
              <Text>Duration:{duration}</Text>
              <IconButton
                aria-label="center back"
                icon={<FaLocationArrow />}
                isRound
                onClick={() => map.panTo(center)}
              />
            </HStack>
          </Box>
        </Flex>
      </ContHomeRoad>
    </div>
  );
}

export default Location;
