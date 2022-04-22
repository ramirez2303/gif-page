import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "../components/Search";
import { Link } from "wouter";
function NavBar({ handleDoSearch, isLoading }) {

  const scrollToTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <Stack
      w="100%"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading fontSize="xl" textTransform="uppercase" onClick={scrollToTop}>
        <Link to="/">Gifix Searcher</Link>
      </Heading>
      <Stack justifyContent="center" alignItems="center">
        <Search onSubmit={handleDoSearch} isLoading={isLoading} />
      </Stack>
      <ColorModeSwitch />
    </Stack>
  );
}

export default NavBar;
