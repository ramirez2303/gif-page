import { Container, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import TrendingGifs from "../../components/TrendingGifs";
import HomeSections from "../../components/HomeSections";
import Categorys from "../../components/Categorys";

function Home() {
  return (
    <Container maxW="1250px">
      <Stack spacing={14}>
        <Stack minH="80vh">
          <HomeSections title="Last Search" keyword="" />
        </Stack>
        <Stack spacing={8} minH="80vh">
          <Heading fontSize="3xl" borderBottomWidth="3px">
            Popular Gifs
          </Heading>
          <TrendingGifs />
        </Stack>
        <Stack spacing={8}>
          <Heading fontSize="3xl" borderBottomWidth="3px">
            Popular Categorys
          </Heading>
          <Categorys />
        </Stack>
      </Stack>
    </Container>
  );
}

export default Home;
