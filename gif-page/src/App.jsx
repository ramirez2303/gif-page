import { Box, Container, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Route } from "wouter";
import ErrorLimit from "./pages/Error/ErrorLimit";
import ErrorSearch from "./pages/Error/ErrorSearch";
import ErrorTotal from "./pages/Error/ErrorTotal";
import Gifs from "./pages/Search/Gifs";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar";
import ScrollTopButton from "./components/ScrollTopButton";

/*
Desaparecer boton toTop en el inicio
Usar useContext para la pag detalles
Poner el dark mode en localStorage
*/
function App() {
  return (
    <Box className="App" h="100%" w="100%">
      <ScrollTopButton />
      <Stack h="100%" spacing={0} alignItems="center">
        <Stack
          w="100%"
          bgColor={useColorModeValue("gray.100", "#161a1d")}
          borderBottomWidth="1px"
          position="sticky"
          top="0"
          zIndex="99999"
        >
          <Container maxW="1250px">
            <NavBar />
          </Container>
        </Stack>
        <Stack
          w="100%"
          h="100%"
          paddingY={10}
          justifyContent="center"
          alignItems="center"
        >
          <Route component={Home} path="/" />
          <Route component={Gifs} path="/search/:keyword/:limit" />
          <Route component={ErrorTotal} path="/error/errortotal" />
          <Route component={ErrorSearch} path="/error/search" />
          <Route component={ErrorLimit} path="/error/limit" />
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
