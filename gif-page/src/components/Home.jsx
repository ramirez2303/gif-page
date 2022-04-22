import { Container, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import TrendingGifs from "./TrendingGifs";
import HomeSections from "./HomeSections";

function Home() {
  return (
    <Container maxW="1250px">
      <Stack spacing={14}>
        <HomeSections title="Last Search" keyword="" />
        <Stack spacing={8}>
          <Heading fontSize="3xl" borderBottomWidth="3px">
            Popular Gifs
          </Heading>
          <TrendingGifs />
        </Stack>
        <HomeSections title="Funny" keyword="funny" />
        <HomeSections title="Sad" keyword="sad" />
        <HomeSections title="Angry" keyword="angry" />
        <HomeSections title="Laught" keyword="laught" />
        <HomeSections title="Confusion" keyword="confusion" />
        <HomeSections title="Futbol" keyword="futbol" />
        <HomeSections title="Sport" keyword="sport" />
      </Stack>
    </Container>
  );
}

export default React.memo(Home);
