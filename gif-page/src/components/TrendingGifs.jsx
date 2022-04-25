import {
  Box,
  Grid,
  GridItem,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Loading from "./Loading";
import { useLocation } from "wouter";
import GifMap from "./GifMap";
import useTrendGifs from "../hooks/useTrendGifs";

function TrendingGifs() {
  const { gifs, isLoading } = useTrendGifs();
  const [path, pushLocation] = useLocation();

  const handleClick = (id) => {
    pushLocation(`/detail/${id}`);
  };

  if (isLoading) {
    return (
      <Stack h="60px">
        <Loading />;
      </Stack>
    );
  } else {
    return (
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns={{
          base: "repeat(1, 300px)",
          sm: "repeat(1, 300px)",
          md: "repeat(2, 300px)",
          lg: "repeat(3, 300px)",
          xl: "repeat(4, 300px)",
        }}
        w={{ base: "250px", sm: "auto", md: "auto", lg: "auto" }}
        gap={2}
        spacing={0}
        justifyContent="center"
        alignItems="center"
      >
        {gifs.map((gif, i) => {
          return <GifMap key={i + 3} gif={gif} i={i} />;
        })}
      </Grid>
    );
  }
}
export default TrendingGifs;
