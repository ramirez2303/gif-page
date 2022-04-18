import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/source-code-pro/700.css";
import "@fontsource/source-code-pro/400.css";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
