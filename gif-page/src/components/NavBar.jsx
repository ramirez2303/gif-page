import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch"

function NavBar() {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" borderBottomWidth="medium">
        <Heading textTransform="uppercase">Gifix Searcher</Heading>
        <ColorModeSwitch />
    </Stack>
  );
}

export default NavBar;
