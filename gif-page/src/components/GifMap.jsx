import { Box, GridItem, Image, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import useNearScreen from "../hooks/useNearScreen";
import GifTitle from "./GifTitle";

const GifMap = ({ gif, i }) => {
  const [path, pushLocation] = useLocation();

  const handleClick = (id) => {
    pushLocation(`/detail/${id}`);
  };
  return (
    <GridItem
      w="300px"
      key={i + 13}
      onClick={() => handleClick(gif.id)}
      cursor="pointer"
    >
      <Box
        key={i + 1}
        w="300px"
        h="250px"
        bgColor={useColorModeValue("gray.50", "purple.800")}
      >
        <GifTitle gif={gif} i={i} />
        <Image key={gif.id} alt={gif.title} src={gif.url} loading="lazy" w="300px" h="250px" />
      </Box>
    </GridItem>
  );
};

export default function lazyGifs({ gif, i }) {
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <div key={i + 4} ref={fromRef}>
      {isNearScreen ? <GifMap key={i + 3} gif={gif} i={i} /> : null}
    </div>
  );
}
