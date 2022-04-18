import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import GifHoverContent from "./GifHoverContent";

const Gifs = ({ arrGifs }) => {
  const [mouseEnter, setMouseEnter] = useState(null);

  const handleMouseEnter = (i) => {
    if (mouseEnter !== i) {
      setMouseEnter(false);
      setMouseEnter(i);
    } else if (mouseEnter === i) {
      setMouseEnter(false);
    } else {
      setMouseEnter(i);
    }
  };

  const handleMouseLeave = (index) => setMouseEnter(null);

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      w={{ base: "250px", sm: "auto", md: "auto", lg: "auto" }}
      gap={10}
      spacing={0}
    >
      {arrGifs.map((gif, i) => {
        const index = i;
        return (
          <GridItem w="300px">
            <Box
              key={i + 1}
              w="300px"
              h="320px"
              bgColor="#ae2012"
              borderRadius="2xl"
            >
              <Stack h="70px" justifyContent="center">
                <Text
                  fontSize="sm"
                  fontWeight="700"
                  textAlign="center"
                  w="280px"
                  color="#fff"
                  margin="auto"
                >
                  {gif.title}
                </Text>
              </Stack>
              <GifHoverContent
                mouseEnter={mouseEnter}
                gif={gif}
                index={index}
                handleMouseLeave={handleMouseLeave}
              />
              <Image
                key={gif.id}
                alt={gif.title}
                src={gif.url}
                w="300px"
                height="250px"
                onMouseEnter={() => handleMouseEnter(i)}
              />
            </Box>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default Gifs;
