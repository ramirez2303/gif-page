import {
  Box,
  Grid,
  GridItem,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useLocation } from "wouter";
import useGifs from "../hooks/useGifs";
import GifMap from "./GifMap";
import Loading from "./Loading";

function HomeGifs({ keyword }) {
  const { gifs, isLoading } = useGifs({ keyword, limit: 8 });

  const [path, pushLocation] = useLocation();

  const handleClick = (id) => {
    pushLocation(`/detail/${id}`);
  };

  if (isLoading) {
    return (
      <Stack h="60px">
        <Loading />
      </Stack>
    );
  } else {
    return (
      <Grid
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
          return <GifMap key={i + 2} gif={gif} i={i} />;
        })}
      </Grid>
    );
  }
}
export default HomeGifs;
